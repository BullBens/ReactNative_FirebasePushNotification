---
sh: "mkdir <%= cwd %>/ios/<%=displayName%>/Images.xcassets/SplashIcon.imageset
&& cp <%= cwd %>/src/assets/splashscreen/launch_screen.png <%= cwd %>/ios/<%=displayName%>/Images.xcassets/SplashIcon.imageset/launch_screen.png 
&& cp <%= cwd %>/src/assets/splashscreen/launch_screen@2x.png <%= cwd %>/ios/<%=displayName%>/Images.xcassets/SplashIcon.imageset/launch_screen@2x.png
&& cp <%= cwd %>/src/assets/splashscreen/launch_screen@3x.png <%= cwd %>/ios/<%=displayName%>/Images.xcassets/SplashIcon.imageset/launch_screen@3x.png
&& cp <%= cwd %>/_templates/setup/splashscreen/SplashIcon.imageset/Contents.json <%= cwd %>/ios/<%=displayName%>/Images.xcassets/SplashIcon.imageset/Contents.json"
---