// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAen3PtlGfJEOPJO9xyN_wd2vSV83V7tY",
  authDomain: "themovieapp-541ec.firebaseapp.com",
  projectId: "themovieapp-541ec",
  storageBucket: "themovieapp-541ec.appspot.com",
  messagingSenderId: "451728403138",
  appId: "1:451728403138:web:8f8aeec1811375a1ff295b",
  measurementId: "G-1FWZM25D7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {firebaseConfig , app , analytics }