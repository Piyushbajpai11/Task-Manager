import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWB8YIv8BF1dN5qSPrUq9S83NpqDbQ3Hk",
    authDomain: "task-manager-ts-3b5d2.firebaseapp.com",
    projectId: "task-manager-ts-3b5d2",
    storageBucket: "task-manager-ts-3b5d2.firebasestorage.app",
    messagingSenderId: "1019817809307",
    appId: "1:1019817809307:web:2309231a3352f1abe5fd3e",
    measurementId: "G-EER2J9YNLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();