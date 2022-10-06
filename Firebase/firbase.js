// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL-My88OILWdlXFHwwfknlR26cOH8ZDhg",
  authDomain: "yellowkitchen-3bb55.firebaseapp.com",
  projectId: "yellowkitchen-3bb55",
  storageBucket: "yellowkitchen-3bb55.appspot.com",
  messagingSenderId: "21972439316",
  appId: "1:21972439316:web:6b9ed44e0b79add2857201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}