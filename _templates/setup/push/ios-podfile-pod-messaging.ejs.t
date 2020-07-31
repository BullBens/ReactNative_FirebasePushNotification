---
inject: true
to: ios/Podfile
before: use_native_modules!
skip_if: pod 'Firebase\/Messaging', '\~> 6\.3\.0'
---
		pod 'Firebase/Messaging', '~> 6.3.0'