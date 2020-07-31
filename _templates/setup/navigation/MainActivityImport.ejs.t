---
inject: true
to: android/app/src/main/java/<%= bundleIdentifer.split('.').join('/').toLowerCase() %>/MainActivity.java
before: import com.facebook.react.ReactActivity;
skip_if: import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
---
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;