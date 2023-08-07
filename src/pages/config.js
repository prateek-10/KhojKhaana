import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC4yUBCplGVf3DTv9yg9VRYFetkhGi7NTo",
  authDomain: "khaanakhazana-cbae2.firebaseapp.com",
  projectId: "khaanakhazana-cbae2",
  storageBucket: "khaanakhazana-cbae2.appspot.com",
  messagingSenderId: "798289867347",
  appId: "1:798289867347:web:f6733a84005f8c89764ca6",
  measurementId: "G-5YKK1CBPC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};
