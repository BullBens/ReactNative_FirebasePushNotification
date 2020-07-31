---
inject: true
to: android/build.gradle
after: ext \{
skip_if: supportLibVersion
---
		supportLibVersion = "27.0.0"