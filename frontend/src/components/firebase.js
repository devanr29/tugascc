import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    // Masukkan konfigurasi Firebase Anda di sini
    apiKey: "AIzaSyBr2-ABQKJVHH9TQTnynMvebEzifxUzDhQ",
    authDomain: "login-tubes-8b34c.firebaseapp.com",
    databaseURL: "https://my-ipond-test-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "login-tubes-8b34c",
    storageBucket: "login-tubes-8b34c.appspot.com",
    messagingSenderId: "518077304231",
    appId: "1:518077304231:web:4c47045ba6b3ce16c77a82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the Firebase database
export const db = getDatabase(app);