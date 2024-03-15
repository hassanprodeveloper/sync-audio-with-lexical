// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu3vZqKc162MAHFno-1B-Cly37ouRtocs",
  authDomain: "sync-audio-with-lexical.firebaseapp.com",
  projectId: "sync-audio-with-lexical",
  storageBucket: "sync-audio-with-lexical.appspot.com",
  messagingSenderId: "491975683981",
  appId: "1:491975683981:web:ff1a43c0688985a24c57c4",
  measurementId: "G-DNY5BLX3TZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
