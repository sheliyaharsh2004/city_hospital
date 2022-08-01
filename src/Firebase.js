// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxBteaT1q2uw5klwzg9leZ4IzY-ca7Vi0",
  authDomain: "city-hospital-73b20.firebaseapp.com",
  projectId: "city-hospital-73b20",
  storageBucket: "city-hospital-73b20.appspot.com",
  messagingSenderId: "215532643321",
  appId: "1:215532643321:web:881f224c9b46c2f73f9328",
  measurementId: "G-Y22M85CPBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);