---
inject: true
to: android/app/build.gradle
after: signingConfigs {
skip_if: project.hasProperty('RELEASE_STORE_FILE')
---
		
		release {
			if (project.hasProperty('RELEASE_STORE_FILE')) {
				storeFile file(RELEASE_STORE_FILE)
				storePassword RELEASE_STORE_PASSWORD
				keyAlias RELEASE_KEY_ALIAS
				keyPassword RELEASE_KEY_PASSWORD
			}
		}