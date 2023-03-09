import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB8RaRh88Ry-SqCPVTUKd5igylKR9yHjMs",
  authDomain: "login-react-app-3fb85.firebaseapp.com",
  projectId: "login-react-app-3fb85",
  storageBucket: "login-react-app-3fb85.appspot.com",
  messagingSenderId: "61379611008",
  appId: "1:61379611008:web:a38be616c7608c809a5965",
  measurementId: "G-71QCD8NSHM"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;