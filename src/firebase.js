// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSo_gPSRvBwdv6nia8UV0saY44O7l_1ew",
  authDomain: "backend-connection-15963.firebaseapp.com",
  projectId: "backend-connection-15963",
  storageBucket: "backend-connection-15963.firebasestorage.app",
  messagingSenderId: "1054975087843",
  appId: "1:1054975087843:web:a50dfb17a5770717ce61d6",
  measurementId: "G-PDGD0D5XGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);