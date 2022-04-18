// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1-1S34oaUxXMxYsXG3oST3P4qjAzFWdI",
    authDomain: "dental-care-e05d3.firebaseapp.com",
    projectId: "dental-care-e05d3",
    storageBucket: "dental-care-e05d3.appspot.com",
    messagingSenderId: "1050354936690",
    appId: "1:1050354936690:web:3dce632e4c0dcb62960beb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;