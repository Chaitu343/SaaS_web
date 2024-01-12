import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDpO0fEzrp4_oUKBM_rJtMcXqcP18tT3PI",
  authDomain: "saas-e4273.firebaseapp.com",
  projectId: "saas-e4273",
  storageBucket: "saas-e4273.appspot.com",
  messagingSenderId: "168393938106",
  appId: "1:168393938106:web:e841a031679c6a6b255e83",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
