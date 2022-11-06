import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyClrcNE3AIZILi-rtWNCu-Fycb9MRPlg8s",
  authDomain: "mini-818e0.firebaseapp.com",
  projectId: "mini-818e0",
  storageBucket: "mini-818e0.appspot.com",
  messagingSenderId: "989156360562",
  appId: "1:989156360562:web:76724fa6a53ceb86c39deb"
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

