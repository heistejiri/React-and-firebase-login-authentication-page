import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8RaRh88Ry-SqCPVTUKd5igylKR9yHjMs",
  authDomain: "login-react-app-3fb85.firebaseapp.com",
  projectId: "login-react-app-3fb85",
  storageBucket: "login-react-app-3fb85.appspot.com",
  messagingSenderId: "61379611008",
  appId: "1:61379611008:web:a38be616c7608c809a5965",
  measurementId: "G-71QCD8NSHM"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };