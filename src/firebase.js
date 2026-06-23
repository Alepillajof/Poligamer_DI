// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCn0uMPjsepIMtquk7ncfSP_hJ4_xH7BYc",
    authDomain: "poligamer-566ad.firebaseapp.com",
    projectId: "poligamer-566ad",
    storageBucket: "poligamer-566ad.firebasestorage.app",
    messagingSenderId: "450012861052",
    appId: "1:450012861052:web:c7e71d2a7029f1bba3eff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authFirebase = getAuth(app);