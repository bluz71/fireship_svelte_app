import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

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

/**
 * @returns a store with the current firebase user
 */
function userStore() {
    let unsubscribe: () => void;

    if (!auth || !globalThis.window) {
        console.warn("Auth is not initialized or not in browser");
        const { subscribe } = writable<User | null>(null);
        return {
            subscribe,
        };
    }

    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
            set(user);
        });

        return () => unsubscribe();
    });

    return {
        subscribe,
    };
}

export const user = userStore();
