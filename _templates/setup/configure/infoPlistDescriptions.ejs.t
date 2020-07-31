---
inject: true
to: ios/<%=displayName%>/Info.plist
after: <dict>
skip_if: <key>NSCalendarsUsageDescription</key>
---
	<key>NSCalendarsUsageDescription</key>
	<string>Allow $(PRODUCT_NAME) to access your calendar</string>
	<key>NSCameraUsageDescription</key>
	<string>Allow $(PRODUCT_NAME) to use the camera</string>
	<key>NSContactsUsageDescription</key>
	<string>Allow $(PRODUCT_NAME) to access your contacts</string>
	<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
	<string>Allow $(PRODUCT_NAME) to use your location</string>
	<key>NSLocationAlwaysUsageDescription</key>
	<string>Allow $(PRODUCT_NAME) to use your location</string>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string>Allow $(PRODUCT_NAME) to use your location</string>
	<key>NSMicrophoneUsageDescription</key>
	<string>Allow $(PRODUCT_NAME) to access your microphone</string>
	<key>NSMotionUsageDescription</key>
	<string>Allow $(PRODUCT_NAME) to access your device's accelerometer</string>
	<key>NSPhotoLibraryAddUsageDescription</key>
	<string>Give $(PRODUCT_NAME) permission to save photos</string>
	<key>NSPhotoLibraryUsageDescription</key>
	<string>Give $(PRODUCT_NAME) permission to access your photos</string>
	<key>NSRemindersUsageDescription</key>
	<string>Allow $(PRODUCT_NAME) to access your reminders</string>