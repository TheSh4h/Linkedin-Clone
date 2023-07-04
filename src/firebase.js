import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyC8k9JaB6hBRXK5N-zkm6R-MqwSCxmhhCE",
  
    authDomain: "linkedin-clone-3c66b.firebaseapp.com",
  
    projectId: "linkedin-clone-3c66b",
  
    storageBucket: "linkedin-clone-3c66b.appspot.com",
  
    messagingSenderId: "593142787774",
  
    appId: "1:593142787774:web:fedef630824ed70fabb8ef"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };