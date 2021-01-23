import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB_NgfuV1aNBdZGckUiDlKS7OMzyQsFBgw",
    authDomain: "social-media-2e78f.firebaseapp.com",
    projectId: "social-media-2e78f",
    storageBucket: "social-media-2e78f.appspot.com",
    messagingSenderId: "570101217335",
    appId: "1:570101217335:web:7c5b717639e4459ff327b2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };