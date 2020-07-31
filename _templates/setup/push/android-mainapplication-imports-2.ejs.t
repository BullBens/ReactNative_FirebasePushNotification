---
inject: true
to: android/app/src/main/java/<%= bundleIdentifer.split('.').join('/').toLowerCase() %>/MainApplication.java
before: public class MainApplication
skip_if: import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
---
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
