// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
  apiKey: "AIzaSyA91GGBqYmDZI3sbEGsUz2VsP-jzwFmG1Q",
  authDomain: "otic-6aff2.firebaseapp.com",
  projectId: "otic-6aff2",
  storageBucket: "otic-6aff2.appspot.com",
  messagingSenderId: "1022591030193",
  appId: "1:1022591030193:web:4da2b59ec7f25123122390",
  measurementId: "G-JG59KXT53H"
};

// Initialize Firebase
const  app = initializeApp(irebaseConfig);
const analytics = getAnalytics(app);