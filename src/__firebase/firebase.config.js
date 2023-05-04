// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7bgfpuRK7d7sCOz38bRdpvlDwcDwIAlk",
  authDomain: "the-chef-recipes-client-6b1af.firebaseapp.com",
  projectId: "the-chef-recipes-client-6b1af",
  storageBucket: "the-chef-recipes-client-6b1af.appspot.com",
  messagingSenderId: "182249467783",
  appId: "1:182249467783:web:551d79d2b8a968155b6d22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;