---
to: src/components/behavior/PushNotificationListener/PushNotificationListener.tsx
---
import { useMemo, useEffect, useCallback, useRef } from 'react'
import firebase from 'react-native-firebase'
import { Notification } from 'react-native-firebase/notifications'

const defaultNotificationConfig = {
	SOUND: 'default',
	SMALL_ICON: 'ic_notification',
	CHANNEL_ID: 'channel-id',
	CHANNEL_DESCRIPTION: 'Default notification channel',
}

let channelId: string

const createLocalNotificationId = () => String(Date.now())
const log = console.log

/**
 * 	@example
 * 	<PushNotificationListener
 * 		allow
 * 		fcmToken={fcmToken}
 * 		notificationConfig={{}}
 * 		onChangeToken={updateFcmToken}
 * 		onNotificationOpen={handleOpenNotification}
 * 	/>
 */
const PushNotificationListener = ({
	allow = true,
	fcmToken: token = undefined,
	notificationConfig = {},
	onChangeToken,
	onNotificationOpen,
}: TPushNotificationListener) => {
	const pushConfig = useMemo(() => ({ ...defaultNotificationConfig, ...notificationConfig }), [notificationConfig])

	const getToken = useCallback(async () => {
		const newFcmToken = await firebase.messaging().getToken()

		if (!token || token !== newFcmToken) {
			log('newFcmToken', { newFcmToken })
			onChangeToken(newFcmToken)
		}
	}, [token])

	const requestPermission = useCallback(async () => {
		try {
			await firebase.messaging().requestPermission()
			getToken()
		} catch (error) {
			console.warn(error.message)
		}
	}, [getToken])

	const checkPermission = useCallback(async () => {
		const enabled = await firebase.messaging().hasPermission()

		if (enabled) {
			getToken()
		} else {
			requestPermission()
		}
	}, [requestPermission, getToken])

	const sendLocalNotification = useCallback(remoteNotification => {
		const { title = '', subtitle = '', body = '', data } = remoteNotification

		const localNotification = new firebase.notifications.Notification()
			.setNotificationId(createLocalNotificationId())
			.setTitle(title)
			.setSubtitle(subtitle)
			.setBody(body)
			.setData(data)
			.setSound(pushConfig.SOUND)
			.android.setChannelId(channelId) // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
			.android.setSmallIcon(pushConfig.SMALL_ICON)

		firebase
			.notifications()
			.displayNotification(localNotification)
			.then(() => log('Message was displayed'))
			.catch(err => console.error('displayNotification', err))
	}, [])

	const handleNotificationReceiving = useCallback(
		notification => {
			log('notificationListener', notification)
			sendLocalNotification(notification)
		},
		[sendLocalNotification],
	)

	const handleNotificationOpening = useCallback(
		notificationOpen => {
			const { notification } = notificationOpen
			log('notificationOpen', notification)
			firebase.notifications().removeDeliveredNotification(notification.notificationId)
			onNotificationOpen(notification)
		},
		[onNotificationOpen],
	)
	// ------------------------------------------------------------------------------------

	// Check permissions and token.
	useEffect(() => {
		if (!allow) return
		checkPermission()
	}, [allow, checkPermission])

	// Register listeners.
	useEffect(() => {
		// Create the channel
		const channel = new firebase.notifications.Android.Channel(
			pushConfig.CHANNEL_ID,
			pushConfig.CHANNEL_DESCRIPTION,
			firebase.notifications.Android.Importance.Max,
		).setDescription(pushConfig.CHANNEL_DESCRIPTION)
		channelId = channel.channelId
		firebase.notifications().android.createChannel(channel)

		//  Triggered for data only payload in foreground
		const messageListener = firebase.messaging().onMessage(handleNotificationReceiving)

		// Triggered when a particular notification has been received in foreground
		const notificationListener = firebase.notifications().onNotification(handleNotificationReceiving)

		// If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
		const notificationOpenedListener = firebase.notifications().onNotificationOpened(handleNotificationOpening)

		// Handle initial notification
		// const notificationDisplayedListener = firebase.notifications().onNotificationDisplayed(notification => log('notificationDisplayedListener', notification))

		return () => {
			notificationListener()
			notificationOpenedListener()
			messageListener()
			// notificationDisplayedListener()
		}
	}, [handleNotificationReceiving, handleNotificationOpening])

	/* Handle initial notification */
	const initialNotificationHandled = useRef(false)

	useEffect(() => {
		firebase
			.notifications()
			.getInitialNotification()
			.then(notificationOpen => {
				if (notificationOpen && !initialNotificationHandled.current) {
					console.log('handleNotificationOpening')
					handleNotificationOpening(notificationOpen)
					initialNotificationHandled.current = true
				}
			})
	}, [handleNotificationOpening, initialNotificationHandled])

	return null
}

type TNotificationConfig = {
	SOUND?: string
	SMALL_ICON?: string
	CHANNEL_ID?: string
	CHANNEL_DESCRIPTION?: string
}

type TPushNotificationListener = {
	fcmToken: string | undefined
	onChangeToken: (fcmToken: string) => void
	allow?: boolean
	notificationConfig?: TNotificationConfig
	onNotificationOpen?: (notification: Notification) => void
}

export default PushNotificationListener
