---
inject: true
to: android/app/src/main/AndroidManifest.xml
after: <application
skip_if: android:largeHeap="true"
---
		android:largeHeap="true"