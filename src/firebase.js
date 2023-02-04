import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/*________________________________________________________________________________*/

const firebaseConfig = {
  apiKey: "AIzaSyDHmvbyf-s7QIR-qg6wqHmX_FOG5dQ4xrw",
  authDomain: "dummy-linkedin-clone-976cd.firebaseapp.com",
  projectId: "dummy-linkedin-clone-976cd",
  storageBucket: "dummy-linkedin-clone-976cd.appspot.com",
  messagingSenderId: "332218986285",
  appId: "1:332218986285:web:b18a50ee09fb33544a6da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

/*________________________________________________________________________________*/
