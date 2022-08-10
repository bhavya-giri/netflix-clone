import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBIiCRPbm1T3KTFpmN3ZAOwDJ_ynIIcQrA",
    authDomain: "netflix-build-5f1a5.firebaseapp.com",
    projectId: "netflix-build-5f1a5",
    storageBucket: "netflix-build-5f1a5.appspot.com",
    messagingSenderId: "36218287487",
    appId: "1:36218287487:web:ed6c55ffb70216abafd64a"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;