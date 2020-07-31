---
inject: true
to: android/app/src/main/AndroidManifest.xml
before: <activity
skip_if: <uses-permission android:name="android.permission.VIBRATE" />
---

		<!-- Push notifications  -->
		<meta-data
			android:name="com.google.firebase.messaging.default_notification_icon"
			android:resource="@drawable/ic_notification" 
		/>
		<meta-data
			android:name="com.google.firebase.messaging.default_notification_color"
			android:resource="@color/status_bar_color" 
		/>
