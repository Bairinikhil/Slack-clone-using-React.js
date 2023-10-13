import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, addDoc  } from 'firebase/firestore';// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5JHX-XbgkCX6kvWEUt4YBGnxIbOt7nMI",
  authDomain: "slack-clone-63724.firebaseapp.com",
  projectId: "slack-clone-63724",
  storageBucket: "slack-clone-63724.appspot.com",
  messagingSenderId: "25127900735",
  appId: "1:25127900735:web:df11ec1e144c7558028a8a",
  measurementId: "G-70HPKK9SHW"
};



const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()
const provider= new GoogleAuthProvider()

export {db, auth, provider, collection, addDoc }

















