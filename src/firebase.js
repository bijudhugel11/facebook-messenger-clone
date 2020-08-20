import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNdtROTgpxWXbRR8EZjxbHkAIJCuenbEM",
  authDomain: "biju-messenger.firebaseapp.com",
  databaseURL: "https://biju-messenger.firebaseio.com",
  projectId: "biju-messenger",
  storageBucket: "biju-messenger.appspot.com",
  messagingSenderId: "779355167095",
  appId: "1:779355167095:web:64b361141773672f16a972",
  measurementId: "G-NDT22MH1VD",
});

const db = firebaseApp.firestore();

export default db;
