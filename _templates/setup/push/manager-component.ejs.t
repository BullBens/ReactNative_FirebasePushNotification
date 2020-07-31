---
to: src/components/behavior/PushNotificationManager/PushNotificationManager.tsx
---
import React from 'react'
import { useGlobal, useCallback } from '@hooks'
import { PushNotificationListener } from '@components'

const PushNotificationManager = () => {
	const [fcmToken, setFcmToken] = useGlobal('fcmToken')
	const handleOpenNotification = useCallback(notification => {
		console.log('Open notification', notification)
	}, [])

	return (
		<PushNotificationListener
			fcmToken={fcmToken}
			onChangeToken={setFcmToken}
			onNotificationOpen={handleOpenNotification}
		/>
	)
}

export default PushNotificationManager
