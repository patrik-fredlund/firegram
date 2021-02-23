import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBaus4WxN7DjEbA0FwwTBYshXvQSdM5Onc",
    authDomain: "ninja-firegram-ced48.firebaseapp.com",
    projectId: "ninja-firegram-ced48",
    storageBucket: "ninja-firegram-ced48.appspot.com",
    messagingSenderId: "359305346381",
    appId: "1:359305346381:web:238152c79b501d1045cb04"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore};