---
inject: true
to: android/app/build.gradle
after: android \{
skip_if: dexOptions
---
	dexOptions { javaMaxHeapSize "4g" }
