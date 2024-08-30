// src/firebase/main.ts

import { getMessaging, getToken } from 'firebase/messaging'; // Import Firebase messaging functions
import { firebaseConfig, vapidKey } from './config'; // Import Firebase config and VAPID key
import { initializeApp } from 'firebase/app'; // Import Firebase initialization function

// Initialize Firebase
initializeApp(firebaseConfig);

const messaging = getMessaging(); // Get Firebase Messaging instance

export async function requestPermission() {
  console.log('Requesting permission...');
  
  // Request permission for notifications
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      
      // Retrieve FCM registration token
      getToken(messaging, { vapidKey }).then((currentToken) => {
        if (currentToken) {
          updateUI(currentToken); // Update UI with the token
        } else {
          console.log('No registration token available.');
        }
      }).catch((err) => {
        console.log('Error retrieving registration token. ', err);
      });
    } else {
      console.log('Unable to get permission to notify.');
    }
  }).catch((err) => {
    console.error('Error requesting permission: ', err);
  });
}

// Function to update UI with the token
function updateUI(token: string) {
  const tokenElement = document.querySelector('#token')!;
  tokenElement.textContent = token;
}
