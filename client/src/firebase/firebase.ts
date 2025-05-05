// src/firebase/firebase.js
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8Mbg1M3b3pcRm8_dt1O-JWU2usDwda0k",
    authDomain: "web-agency-69d8c.firebaseapp.com",
    projectId: "web-agency-69d8c",
    storageBucket: "web-agency-69d8c.firebasestorage.app",
    messagingSenderId: "425814150106",
    appId: "1:425814150106:web:9bfc636b135db2207e8ee3",
    measurementId: "G-90CV6GR69Y"
  };
  

  const app = initializeApp(firebaseConfig);
  console.log("the apppp===",app)
  const db = getFirestore(app);
  console.log("the apppp===",db)

export { db };
