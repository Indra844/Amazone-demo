import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAB3ABY5SByeabJvc8SULIXuG1hW_187bc",
  authDomain: "e-clone-1373b.firebaseapp.com",
  databaseURL: "https://e-clone-1373b.firebaseio.com",
  projectId: "e-clone-1373b",
  storageBucket: "e-clone-1373b.appspot.com",
  messagingSenderId: "866338463404",
  appId: "1:866338463404:web:f1b1612727d41be3b60909",
  measurementId: "G-LY1MRHHYGJ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
