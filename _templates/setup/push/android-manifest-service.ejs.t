---
inject: true
to: android/app/src/main/AndroidManifest.xml
before: </application>
skip_if: <action android:name="com.google.firebase.MESSAGING_EVENT" />
---

		<!-- Push notifications -->
		<service android:name="io.invertase.firebase.messaging.RNFirebaseMessagingService">
			<intent-filter>
				<action android:name="com.google.firebase.MESSAGING_EVENT" />
			</intent-filter>
		</service>
		<service android:name="io.invertase.firebase.messaging.RNFirebaseBackgroundMessagingService" />
