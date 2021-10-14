import firebase from 'firebase'
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyCMBTlDNRqXg8EU9rFCeYJfxnRTWqSBshs",
  authDomain: "roomie-2ba33.firebaseapp.com",
  projectId: "roomie-2ba33",
  storageBucket: "roomie-2ba33.appspot.com",
  messagingSenderId: "1035653759762",
  appId: "1:1035653759762:web:803621c3d368eb2b4529cb",
  measurementId: "G-MBFR78F3W5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  const auth = firebase.auth();

  export const storage  = firebase.storage();

  export {auth};

  export {database};
