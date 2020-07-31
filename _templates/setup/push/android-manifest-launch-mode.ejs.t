---
inject: true
to: android/app/src/main/AndroidManifest.xml
after: android:name="\.MainActivity"
skip_if: android:launchMode
---
		android:launchMode="singleTop"