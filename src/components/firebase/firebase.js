import app from "firebase/app";

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
  }
}

export default Firebase;
