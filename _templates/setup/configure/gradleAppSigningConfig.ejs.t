---
inject: true
to: android/app/build.gradle
after: minifyEnabled enableProguardInReleaseBuilds
skip_if: signingConfig signingConfigs.release
---
		signingConfig signingConfigs.release