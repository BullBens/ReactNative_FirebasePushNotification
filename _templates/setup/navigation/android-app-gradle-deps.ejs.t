---
inject: true
to: android/app/build.gradle
after: dependencies {
skip_if: implementation 'androidx.appcompat
---
	implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
	implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'