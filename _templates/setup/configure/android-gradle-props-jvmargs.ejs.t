---
inject: true
to: android/gradle.properties
append: true
skip_if: org\.gradle\.jvmargs
---
org.gradle.jvmargs=-Xmx4608M

RELEASE_STORE_FILE=release.keystore
RELEASE_KEY_ALIAS=key-alias
RELEASE_STORE_PASSWORD=_
RELEASE_KEY_PASSWORD=_

# Facebook login
# keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64
# keytool -exportcert -alias key-alias -keystore ./android/app/release-key.keystore | openssl sha1 -binary | openssl base64
#
# Google signin
# keytool -exportcert -keystore ~/.android/debug.keystore -list -v
# keytool -list -v -keystore ./android/app/release-key.keystore -alias key-alias