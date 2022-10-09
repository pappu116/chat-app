// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAS4r2yecw_qpx2jOkiAumorUbnu8YLv8U",
  authDomain: "chat-d75ec.firebaseapp.com",
  projectId: "chat-d75ec",
  storageBucket: "chat-d75ec.appspot.com",
  messagingSenderId: "766567152654",
  appId: "1:766567152654:web:22281eccb92b00b017905f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
