// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCWe-HXGzHX6vb8IQZ6wHtFt82bzCGcQ4E",
//   authDomain: "front-1372c.firebaseapp.com",
//   projectId: "front-1372c",
//   storageBucket: "front-1372c.appspot.com",
//   messagingSenderId: "519816253490",
//   appId: "1:519816253490:web:1bb6cabe7551064f2d2c2b",
//   measurementId: "G-GRL2QN6BH0",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export {auth};




/// * new firebase

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWe-HXGzHX6vb8IQZ6wHtFt82bzCGcQ4E",
  authDomain: "front-1372c.firebaseapp.com",
  projectId: "front-1372c",
  storageBucket: "front-1372c.appspot.com",
  messagingSenderId: "519816253490",
  appId: "1:519816253490:web:1bb6cabe7551064f2d2c2b",

};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };



