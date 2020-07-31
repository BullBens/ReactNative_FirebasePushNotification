---
inject: true
to: android/app/build.gradle
after: dependencies
skip_if: implementation "com.google.firebase:firebase-messaging:18.0.0"
---
	implementation "com.google.firebase:firebase-messaging:18.0.0"
  	implementation 'me.leolin:ShortcutBadger:1.1.21@aar' 