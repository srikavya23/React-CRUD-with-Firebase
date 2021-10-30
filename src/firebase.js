// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRfYaS5sRAJ7uUOq45d5UKH74ITYmJNjc",
  authDomain: "sample-b7c49.firebaseapp.com",
  projectId: "sample-b7c49",
  storageBucket: "sample-b7c49.appspot.com",
  messagingSenderId: "877711879",
  appId: "1:877711879:web:bf19e04c31bdd0c9b010a2",
  measurementId: "G-6RY9K089BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
