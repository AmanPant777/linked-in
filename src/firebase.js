import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCdrZHo_hZMjsyFhrtI9e_kNJ32ktg1n_s",
  authDomain: "linked-55ffa.firebaseapp.com",
  projectId: "linked-55ffa",
  storageBucket: "linked-55ffa.appspot.com",
  messagingSenderId: "748214872165",
  appId: "1:748214872165:web:1490389a7cd381b5bdbe8c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
