// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZuAFypGM70A7n5zZJQpz-KZj2XVA-3rk",
  authDomain: "challenge-eab67.firebaseapp.com",
  projectId: "challenge-eab67",
  storageBucket: "challenge-eab67.appspot.com",
  messagingSenderId: "887328405026",
  appId: "1:887328405026:web:eacc87721d7cae0e117c7b",
  measurementId: "G-FC8K9ZWPYR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
