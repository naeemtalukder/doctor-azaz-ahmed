// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGsEgwBrAq-K6nijfevbMsMbdMUoWUOWM",
    authDomain: "doctor-azaz-ahmed.firebaseapp.com",
    projectId: "doctor-azaz-ahmed",
    storageBucket: "doctor-azaz-ahmed.appspot.com",
    messagingSenderId: "245675908668",
    appId: "1:245675908668:web:699cabb90a9e607fa7ed39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;