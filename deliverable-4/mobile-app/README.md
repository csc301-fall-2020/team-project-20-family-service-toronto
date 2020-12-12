## Mobile Application Information

This application was made using React Native with the expo cli as there are no native OS components outside of ones available from npm.

#### Install `expo`:
```npm install --global expo-cli``` (Requires NPM and related tools)

#### Testing Application on Device/Emulator:
Within the directory `deliverable-4/mobile-app/FamilyServicesToronto` use the `expo` cli to run and test the application.
e.g.:
```npm run android-cli``` to run a live reloading version application on android device or emulator
```npm run ios``` as the same for and ios emulator (required MacOS)

#### Export Android APKs and iOS IPAs:

`expo build:android` (Requires Expo.io account)

`expo build:ios` (Requires Apple Developer Account ~99USD/yr)

You can deploy to Google Play Store and Apple App Store with these APK and IPA files respectively.

See Expo and React Native Documentation for more information.

#### What's included already

We already have created an APK that's ready to install on most Android devices but since we did not have an Apple Developer Account, we we're unable to create an IPA file.

The Application uses the netlify deploy to render the page, so updates deployed to Netlify will reflect on the app imediately without requiring a new APK/IPA/app reinstall.
