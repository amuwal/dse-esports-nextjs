import { collection, addDoc } from "firebase/firestore";
import fs from "fs";

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { exit } from "process";

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

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(firebase_app);

const c = collection(db, "achievements");

// Function to add documents to the collection
async function addDocsFromJSON(jsonPath) {
  try {
    // Read the JSON file
    const data = fs.readFileSync(jsonPath, "utf8");
    const docs = JSON.parse(data);

    // Check if docs is an array
    if (!Array.isArray(docs)) {
      console.error("The JSON file should contain an array of documents.");
      return;
    }

    // Add each document to the collection
    for (const doc of docs) {
      await addDoc(c, doc);
    }

    console.log("All documents have been added to the collection.");
  } catch (error) {
    console.error("Error adding documents:", error);
  }
}

// Replace 'path/to/your/jsonfile.json' with the actual path to your JSON file
addDocsFromJSON("dse.achievements.json").then(() => exit());
