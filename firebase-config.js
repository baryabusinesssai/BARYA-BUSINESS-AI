// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4zr_F0TGBLFbEYhujI9W7dgxDFKbs_94",
  authDomain: "barya-business-ai.firebaseapp.com",
  projectId: "barya-business-ai",
  storageBucket: "barya-business-ai.firebasestorage.app",
  messagingSenderId: "829537680083",
  appId: "1:829537680083:web:c1fe4e70d474cd63a7f226",
  measurementId: "G-B5P24XTHF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
