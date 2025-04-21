import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAVeMKEk2zQLd6lpSOHcfQa9OduotJiBJs",
    authDomain: "myapp-45598.firebaseapp.com",
    projectId: "myapp-45598",
    storageBucket: "myapp-45598.appspot.com",
    messagingSenderId: "131279734394",
    appId: "1:131279734394:web:00abb154c0f6766944ddc3",
    measurementId: "G-F2Y61NYYYW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.db = firebase.firestore()
  firebase.auth = firebase.auth()
 

  export default firebase