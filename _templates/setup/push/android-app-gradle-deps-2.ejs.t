---
inject: true
to: android/app/build.gradle
after: dependencies
skip_if: implementation "com.google.firebase:firebase-core:16.0.9"
---
	implementation "com.google.android.gms:play-services-base:16.1.0"
  	implementation "com.google.firebase:firebase-core:16.0.9"