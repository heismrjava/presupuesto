// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwlZZvGYl7DK4hoNffqftc2DkRJsJIOIc",
  authDomain: "presupuesto-626db.firebaseapp.com",
  projectId: "presupuesto-626db",
  storageBucket: "presupuesto-626db.appspot.com",
  messagingSenderId: "1086688406968",
  appId: "1:1086688406968:web:850afdf5b6c04ac45a334d",
  measurementId: "G-P4K6NXVDJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
