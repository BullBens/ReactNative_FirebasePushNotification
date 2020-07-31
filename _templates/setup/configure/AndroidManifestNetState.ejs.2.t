---
inject: true
to: android/app/src/main/AndroidManifest.xml
after: <uses-permission android:name="android.permission.INTERNET" />
skip_if: <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
---
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />