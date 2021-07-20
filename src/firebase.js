import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCweGRDmV5KxqkpJjDu-W4_61MHs2Qgsxo",
  authDomain: "linkedin-clone-5cf66.firebaseapp.com",
  projectId: "linkedin-clone-5cf66",
  storageBucket: "linkedin-clone-5cf66.appspot.com",
  messagingSenderId: "774966477422",
  appId: "1:774966477422:web:aaf54b65e8bb86e87f5c7f",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
