# pixabay

Pixabay Image Search

## Specifications / Infrastructure Information

- React Native JS

### IOS

- Node & Watchman
- Xcode
- CocoaPods

### Android

- Node & Watchman
- Java Development Kit
- Install Android Studio
- Install the Android SDK

# Getting Started

Follow the steps React Native Setting up (https://reactnative.dev/docs/environment-setup)

# Setting up

install packages

```
npm install

```

if you are using mac and has error on dependencies

```
npm install --legacy-peer-deps
```

create a file `local.properties`on the android
add the sdk file path

```
sdk.dir=[FILE_PATH]/Android/sdk
```

# If you are using IOS, Install pods

```
cd ios pod install

```

when you encounter problem when a dependency is not updated.

```
You can try following these steps, this usually works for me:

1- Delete your Podfile.lock (I like to use the command '-rm -rf Podfile.lock' on the terminal for this)

2- Delete your Pods folder (I like to use the command '-rm -rf Pods' in the terminal for this)

3- Delete your .xcworkspace

4- Pod install

5- Clear your project into XCode> Product> Clean Build Folder
```

# Start the app

IOS

```
react-native run-ios

```

Android

```
react-native run-android

```

# Note:

"react-native": "0.69.3" version has na error

IOS error on typedef uint8_t clockid_t
go to xcode then go to Pods/RCT-Folly/Time

```
do not put the project in a directory with space

```
