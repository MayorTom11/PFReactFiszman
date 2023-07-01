import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAvq-mGW_jrTvccqtpMHa433w9qQjaIPqQ",
  authDomain: "into-distribuidora.firebaseapp.com",
  projectId: "into-distribuidora",
  storageBucket: "into-distribuidora.appspot.com",
  messagingSenderId: "767557368568",
  appId: "1:767557368568:web:1c6fc2c36ca89b8a8e990d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)