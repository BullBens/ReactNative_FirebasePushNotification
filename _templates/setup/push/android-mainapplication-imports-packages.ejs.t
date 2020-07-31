---
inject: true
to: android/app/src/main/java/<%= bundleIdentifer.split('.').join('/').toLowerCase() %>/MainApplication.java
before: return packages
skip_if: packages\.add\(new RNFirebaseMessagingPackage
---
	packages.add(new RNFirebaseMessagingPackage());
    packages.add(new RNFirebaseNotificationsPackage());