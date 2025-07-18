import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHQ1W7SI8zVbBo5Zg48HlZRiHC-z4snDw",
  authDomain: "strmlyapp-9dce0.firebaseapp.com",
  projectId: "strmlyapp-9dce0",
  storageBucket: "strmlyapp-9dce0.appspot.com",
  messagingSenderId: "417289144598",
  appId: "1:417289144598:web:19feb98fa19166797ea837",
  measurementId: "G-N8Z6F6BVJM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
