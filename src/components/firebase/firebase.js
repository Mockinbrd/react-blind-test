import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const fbConfig = {
  apiKey: "AIzaSyBbuV1k58dCVustGsc0U5ubvlFggfKqkts",
  authDomain: "react-blind-test.firebaseapp.com",
  projectId: "react-blind-test",
  storageBucket: "react-blind-test.appspot.com",
  messagingSenderId: "389470406199",
  appId: "1:389470406199:web:e52b093d5495d89e5421b2",
};

class Firebase {
  constructor() {
    app.initializeApp(fbConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  // User Registration
  register = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // Log In
  login = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // Log Out
  logout = () => this.auth.signOut();

  // Create an user into the cloud firestore
  fetchUserOrPersistIfNull = (id) => this.db.doc(`users/${id}`);

  // Fetch questions
  fetchQuestions = () => this.db.collection('questions');
}

export default Firebase;
