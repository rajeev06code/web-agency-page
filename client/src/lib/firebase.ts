import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { enableIndexedDbPersistence } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.appspot.com`,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Enable offline persistence (optional - helps with reliability)
try {
  enableIndexedDbPersistence(db)
    .catch((err) => {
      if (err.code === 'failed-precondition') {
        console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
      } else if (err.code === 'unimplemented') {
        console.warn('The current browser does not support all of the features required to enable persistence');
      }
    });
} catch (error) {
  console.error("Error enabling persistence:", error);
}

// Set up emulator if in development (useful for local testing)
if (import.meta.env.DEV && window.location.hostname === 'localhost') {
  try {
    // Uncomment this to use Firebase emulator during development
    // connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('Connected to local Firestore emulator');
  } catch (error) {
    console.error("Error connecting to emulator:", error);
  }
}

export { db };