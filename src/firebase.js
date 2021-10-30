// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChfPwfMXfGWlYm5nLY9CkJwlQ1aD8GIK4",
  authDomain: "sample-617b8.firebaseapp.com",
  projectId: "sample-617b8",
  storageBucket: "sample-617b8.appspot.com",
  messagingSenderId: "583051326524",
  appId: "1:583051326524:web:be46bde162d6d88516ff39",
  measurementId: "G-85F51SFXE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
