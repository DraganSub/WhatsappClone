import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBhqCJtswMqJX5PmwNlSl4jPHl2VnO94ng",
  authDomain: "whatsapp-465de.firebaseapp.com",
  databaseURL:
    "https://whatsapp-465de-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "whatsapp-465de",
  storageBucket: "whatsapp-465de.appspot.com",
  messagingSenderId: "828142380785",
  appId: "1:828142380785:web:482f51ce267e96ee79eb50",
  measurementId: "G-ZSHCTQ1QX1",
};

class FirebaseService {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.googleProvider = new GoogleAuthProvider();
    this.database = getDatabase();
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(this.auth, email, password);
  };

  doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(this.auth, email, password);
  };

  doSignInWithGoogle = () => signInWithPopup(this.googleProvider);

  doSignOut = () => signOut();
}

export default FirebaseService;
