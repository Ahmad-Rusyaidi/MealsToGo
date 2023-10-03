// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBURNr6ruPbE3BYa3h81DYPSbT7yr_PbcM",
  authDomain: "mealstogo-30eca.firebaseapp.com",
  projectId: "mealstogo-30eca",
  storageBucket: "mealstogo-30eca.appspot.com",
  messagingSenderId: "327062409050",
  appId: "1:327062409050:web:b65ffb2d42934fe3976d63"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);