// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDyV_YRBpbvI5qd7y9FYSRA6S4lVsBy4ns",
  authDomain: "netflix-7b7a2.firebaseapp.com",
  projectId: "netflix-7b7a2",
  storageBucket: "netflix-7b7a2.appspot.com",
  messagingSenderId: "605183980306",
  appId: "1:605183980306:web:7c2d120e2ac8bf2360f9cb"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig)
const storage=getStorage(app);
export default storage;