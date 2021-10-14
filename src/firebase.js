import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9LjntTBbQUSEoyN1JSX4RZAR-T3no3a8",
  authDomain: "react-9d18d.firebaseapp.com",
  databaseURL: "https://react-9d18d-default-rtdb.firebaseio.com",
  projectId: "react-9d18d",
  storageBucket: "react-9d18d.appspot.com",
  messagingSenderId: "39880715099",
  appId: "1:39880715099:web:f456548dc2b16d466c087e",
  measurementId: "G-812E0HBKZV"
};
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();