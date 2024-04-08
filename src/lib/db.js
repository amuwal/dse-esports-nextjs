// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYT8DuOWm9FpaUwt42vOfKtrSkaJPa5PQ",
  authDomain: "test-01-c53d5.firebaseapp.com",
  databaseURL:
    "https://test-01-c53d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-01-c53d5",
  storageBucket: "test-01-c53d5.appspot.com",
  messagingSenderId: "928299425549",
  appId: "1:928299425549:web:e70a20ec41595345eb1a44",
  measurementId: "G-RF0BHCF2KW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
