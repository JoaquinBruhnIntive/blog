// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxvTbpVykagfGPOfCyp3QSJ4SvYGOs4Ak",
  authDomain: "blog-fc2b9.firebaseapp.com",
  projectId: "blog-fc2b9",
  storageBucket: "blog-fc2b9.appspot.com",
  messagingSenderId: "198467872009",
  appId: "1:198467872009:web:b7bd59b0fd881322abdfd8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;