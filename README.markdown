# NOTICE

Please use [react-native-webview](https://github.com/react-native-community/react-native-webview) instead! While I haven't tested it myself yet, they have added Android file upload support as of v2.10.0 and are likely much better supported.

# React Native Android Image File Upload Webview (camera + file)

This is a demo project based off of the work of several others (such as [this webview file upload sample code](https://github.com/hushicai/ReactNativeAndroidWebView) and [this sample about overriding the built-in webview](https://github.com/cbrevik/webview-native-config-example)) to implement file upload in the React Native Android WebView.

Ideally all the changes to get it to work (from a basic RN project) should be in a single commit that you can put in your app.)

My particular use-case is focused on pictures, so I limited it to uploading from the camera and images already stored on the device. General file upload shouldn't be significantly different.

It only works with React Native 0.50+, and reverts to the built-in WebView on iOS.

I'm a newbie at Java, so I expect the code could use some improvement. :-D

**NOTE**: At least one version of the Android simulator doesn't seem to do the file upload correctly (it gives a checkered background with a red box instead of showing the file you uploaded), but it appears to work fine on the device. If you know what's going on there, I'd love to hear!
