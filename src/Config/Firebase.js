import firebase from "firebase";

var firebaseConfig = {
    //vaciado
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.db = firebase.firestore()
  firebase.auth = firebase.auth()
 

  export default firebase
