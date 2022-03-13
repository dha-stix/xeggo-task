import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { EmailAuthProvider } from "firebase/auth";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6MUrA6jW0Sh7NNpaYz8oMsuhyV-XC23I",
  authDomain: "todo-6150b.firebaseapp.com",
  projectId: "todo-6150b",
  storageBucket: "todo-6150b.appspot.com",
  messagingSenderId: "359370994241",
  appId: "1:359370994241:web:8151d1d3cfed31faa70cc0",
  measurementId: "G-JN1H2R5F8F"
};

const app = initializeApp(firebaseConfig);
const provider = new EmailAuthProvider();
const auth = getAuth();
const db = getFirestore(app);
export {provider, auth}
export default db;