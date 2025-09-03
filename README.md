Amore-DatingApp 🚀❤️
Welcome to Amore-DatingApp! This is a modern, full-stack dating app built with React Native and Expo, featuring swipe cards, live chat (using socket.io), authentication, and elegant UI. Below is a comprehensive guide to get started, understand the code structure, and customize your experience.

Table of Contents 📚
Project Overview

Features

Installation & Setup

Folder & File Structure

Configuration Files

Key Dependencies

Context Providers

Scripts

Contribution

Troubleshooting

License

Project Overview 💡
Amore-DatingApp is a cross-platform dating application aimed at providing a seamless and interactive user experience for connecting singles. Built with React Native using the Expo framework, it leverages state-of-the-art libraries for user authentication, navigation, swipe interactions, and real-time chat.

Features ✨
User Authentication 🔐: Persistent login using AsyncStorage.

Swipe Cards 🃏: Like/dislike profiles visually.

Socket.io Chat 💬: Real-time messaging between users.

Responsive UI📱: Portrait orientation, with support for both iOS and Android tablets.

Custom Icons & Splash 🎨: Branded images for launcher, favicon, and splash screens.

Navigation 🧭: Bottom tab and stack navigators.

Safe Area Handling: UI always fits any device with notches or irregular screens.

Strict Typescript 🤓: Catch errors early, improve code reliability.

Installation & Setup 🛠️
Clone the repository

text
git clone <repo-url>
cd amore-datingapp
Install dependencies

text
npm install
Start the app

For Expo Go (default):

text
npm start
For Android Emulator:

text
npm run android
For iOS Simulator:

text
npm run ios
For web:

text
npm run web
These scripts are defined in package.json.

Folder & File Structure 🗂️
File/Folder	Description
index.js	Root entry. Registers the app with Expo’s runtime.
App.js	Main component (not attached), usually contains routing & providers.
AuthContext.js	Handles login/logout/auth state using AsyncStorage.
SocketContext.js	Provides Socket.io connection/context for live chat.
app.json	Expo app config: icon, splash, orientation, platform settings.
package.json	Dependency list, scripts, and app meta information.
package-lock.json	Full dependency versions for reproducible installs.
babel.config.js	Babel setup (not shown, but standard for React Native).
tsconfig.json	TypeScript settings: strict mode enabled.
Configuration Files ⚙️
app.json
Name/Slug: Project name and URL identifier.

Version: Release identifier.

Orientation: Portrait.

Icons/Splash: Paths for branding images.

Style: Light mode UI default.

Tablet Support: On for iOS.

Android Edge-to-Edge: True for immersive experience.

Web favicon: Path for browser tabs.

tsconfig.json
Strict TypeScript enabled = safer, more robust code.

Key Dependencies 🧩
Core: react, react-native, expo (core engine).

Navigation: @react-navigation/native and siblings for multi-screen support.

Storage: @react-native-async-storage/async-storage for local data (auth).

Socket.io: Real-time, event-driven communication (socket.io-client in code).

UI Utilities: Gesture handler, safe area context, card stack swiper for smooth swipes.

Icons: react-native-vector-icons for scalable icons.

Reanimated: Advanced animations.

Context Providers 🏗️
AuthContext 👤
Manages authentication:

State: userToken for login status.

Hooks: login, logout, checkToken manage persistent sessions.

AsyncStorage: Device-side token storage.

SocketContext 🔌
Manages Socket.io connection:

State: socket object per user session.

Hooks: Initializes socket connection with userId/context.

Disconnect: Cleans up socket on logout or auth change.

Scripts 📝
Script	Purpose
npm start	Launch in Expo Go.
npm run android	Open on Android device/emulator.
npm run ios	Open on iOS simulator.
npm run web	Launch browser version.
Contribution 🤝
Clone and work on feature branches.

Submit pull requests with clear descriptions.

Follow TypeScript guidelines—strict mode is on!

Respect code style set by Babel, TS config, and Prettier (if present).

Troubleshooting 🆘
Ensure images are present at configurable paths (icons/splash).

Emulator must match device’s local IP (192.168.1.7:8000 for socket backend)—change if needed.

Use Expo Doctor (npx expo doctor) for env issues.

Clean cache:

text
npx expo start -c
