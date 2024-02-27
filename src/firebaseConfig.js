// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/compat/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth' ;
import  'firebase/compat/database' ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD19-tOqqiADXeFyJqnNkXy1r_lQLEqpoo",
  authDomain: "mopcare-729ba.firebaseapp.com",
  projectId: "mopcare-729ba",
  storageBucket: "mopcare-729ba.appspot.com",
  messagingSenderId: "766481566778",
  appId: "1:766481566778:web:6bb8f0344a7cb32db7f903"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;