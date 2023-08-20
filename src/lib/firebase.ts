import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration.
const firebaseConfig = {
    apiKey: "AIzaSyAFguaoVVfYmDZpxqx8DDjhvErKjmfwrW8",
    authDomain: "fireship-svelte-app.firebaseapp.com",
    projectId: "fireship-svelte-app",
    storageBucket: "fireship-svelte-app.appspot.com",
    messagingSenderId: "601595731031",
    appId: "1:601595731031:web:b7e8fbcab61b3a2aefd712"
};

// Initialize Firebase.
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
