import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0z9umEAeuwacISJ1lbnpYXVJuQHfTqZM',
  authDomain: 'clone-6c898.firebaseapp.com',
  projectId: 'clone-6c898',
  storageBucket: 'clone-6c898.appspot.com',
  messagingSenderId: '976093674647',
  appId: '1:976093674647:web:5da9a2852f20e1b007fdd2',
  measurementId: 'G-FYXXQJRS5L',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
