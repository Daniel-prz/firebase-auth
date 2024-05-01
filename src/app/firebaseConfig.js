// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries
const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIXnwOkBIqZRJNHaWE-W0KTaQpzrCaL6o",
  authDomain: "fir-auth-b7b32.firebaseapp.com",
  projectId: "fir-auth-b7b32",
  storageBucket: "fir-auth-b7b32.appspot.com",
  messagingSenderId: "100112936783",
  appId: "1:100112936783:web:1d5d808ed329ecc02edf3a",
  measurementId: "G-BN550KF17G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { provider, auth };
