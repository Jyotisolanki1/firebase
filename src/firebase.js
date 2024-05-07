import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyA8DwQ_xR-yuUR4Y2uW5gqlww3l1qgMWuc",
  authDomain: "mern-estate-cb480.firebaseapp.com",
  projectId: "mern-estate-cb480",
  storageBucket: "mern-estate-cb480.appspot.com",
  messagingSenderId: "1001257561173",
  appId: "1:1001257561173:web:0b1fbb8d9872bd9a16b8dc"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
