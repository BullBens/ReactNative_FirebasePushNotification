---
inject: true
to: android/app/src/main/java/<%= bundleIdentifer.split('.').join('/').toLowerCase() %>/MainActivity.java
after: public class MainActivity extends ReactActivity
skip_if: protected ReactActivityDelegate createReactActivityDelegate()
---
    /**
     * Injection for react-native-gesture-handler
     * see: https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html#installation
	*/
	@Override
	protected ReactActivityDelegate createReactActivityDelegate() {
		return new ReactActivityDelegate(this, getMainComponentName()) {
			@Override
			protected ReactRootView createRootView() {
				return new RNGestureHandlerEnabledRootView(MainActivity.this);
			}
		};
	}