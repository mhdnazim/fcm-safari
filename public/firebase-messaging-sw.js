// // // Import and configure the Firebase SDK
// // // These scripts are made available when the app is served or deployed on Firebase Hosting
// // // If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// // importScripts('/__/firebase/9.2.0/firebase-app-compat.js');
// // importScripts('/__/firebase/9.2.0/firebase-messaging-compat.js');
// // importScripts('/__/firebase/init.js');

// // const messaging = firebase.messaging();

// // /**
// //  * Here is is the code snippet to initialize Firebase Messaging in the Service
// //  * Worker when your app is not hosted on Firebase Hosting.

// //  // Give the service worker access to Firebase Messaging.
// //  // Note that you can only use Firebase Messaging here. Other Firebase libraries
// //  // are not available in the service worker.
// //  importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
// //  importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// //  // Initialize the Firebase app in the service worker by passing in
// //  // your app's Firebase config object.
// //  // https://firebase.google.com/docs/web/setup#config-object

// //  firebase.initializeApp({
// //     apiKey: 'AIzaSyBGQSMW6D28n-INOhl1LV5rVcZyKhuE-TE',
// //   authDomain: 'lz-client-portal.firebaseapp.com',
// //   databaseURL: 'https://PROJECT_ID.firebaseio.com',
// //   projectId: 'lz-client-portal',
// //   storageBucket: 'lz-client-portal.appspot.com',
// //   messagingSenderId: '888503534270',
// //   appId: '1:888503534270:web:14871591635f0e258594ef',
// //   measurementId: 'G-G-17HMB8ESFW'
// //  });

// //  // Retrieve an instance of Firebase Messaging so that it can handle background
// //  // messages.
// //  const messaging = firebase.messaging();
// //  **/


// // // If you would like to customize notifications that are received in the
// // // background (Web app is closed or not in browser focus) then you should
// // // implement this optional method.
// // // Keep in mind that FCM will still show notification messages automatically 
// // // and you should use data messages for custom notifications.
// // // For more info see: 
// // // https://firebase.google.com/docs/cloud-messaging/concept-options
// // messaging.onBackgroundMessage(function(payload) {
// //   console.log('[firebase-messaging-sw.js] Received background message ', payload);
// //   // Customize notification here
// //   const notificationTitle = 'Background Message Title';
// //   const notificationOptions = {
// //     body: 'Background Message body.',
// //     icon: '/firebase-logo.png'
// //   };

// //   self.registration.showNotification(notificationTitle,
// //     notificationOptions);
// // });

// // Import and configure the Firebase SDK
// // These scripts are made available when the app is served or deployed on Firebase Hosting
// // If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// // Initialize the Firebase app in the service worker by passing in your app's Firebase config object.
// firebase.initializeApp({
//   apiKey: 'AIzaSyBGQSMW6D28n-INOhl1LV5rVcZyKhuE-TE',
//   authDomain: 'lz-client-portal.firebaseapp.com',
  
//   // databaseURL: 'https://lz-client-portal.firebaseio.com',
//   projectId: 'lz-client-portal',
//   storageBucket: 'lz-client-portal.appspot.com',
//   messagingSenderId: '888503534270',
//   appId: '1:888503534270:web:14871591635f0e258594ef',
//   measurementId: 'G-G-17HMB8ESFW'
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background messages.
// const messaging = firebase.messaging();

// // Handle background messages
// messaging.onBackgroundMessage(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });


importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBGQSMW6D28n-INOhl1LV5rVcZyKhuE-TE',
  authDomain: 'lz-client-portal.firebaseapp.com',
  
  // databaseURL: 'https://lz-client-portal.firebaseio.com',
  projectId: 'lz-client-portal',
  storageBucket: 'lz-client-portal.appspot.com',
  messagingSenderId: '888503534270',
  appId: '1:888503534270:web:14871591635f0e258594ef',
  measurementId: 'G-G-17HMB8ESFW'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

