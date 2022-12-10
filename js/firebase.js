// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADMPRHYzCKBhqWWLBz-DcV0DlBLh5EazE",
  authDomain: "detako-8afdc.firebaseapp.com",
  projectId: "detako-8afdc",
  storageBucket: "detako-8afdc.appspot.com",
  messagingSenderId: "854533692703",
  appId: "1:854533692703:web:49739c49cb7aa9db4f642a",
  measurementId: "G-THHXQ22G2V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);