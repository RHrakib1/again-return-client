// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiTkJU02eeGcUF_xLKcCJkokP_nUy7USs",
    authDomain: "again-return.firebaseapp.com",
    projectId: "again-return",
    storageBucket: "again-return.firebasestorage.app",
    messagingSenderId: "162753451159",
    appId: "1:162753451159:web:6d3d6423b3240d149985d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth