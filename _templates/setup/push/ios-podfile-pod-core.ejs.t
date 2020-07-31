---
inject: true
to: ios/Podfile
before: use_native_modules!
skip_if: pod 'Firebase\/Core', '\~> 6\.3\.0'
---
		pod 'Firebase/Core', '~> 6.3.0' 