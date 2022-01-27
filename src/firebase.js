// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCzfxWOp2Usclo4PEzUjPOGm8jYktOKUXE",
    authDomain: "laboitearecette-fdc44.firebaseapp.com",
    projectId: "laboitearecette-fdc44",
    storageBucket: "laboitearecette-fdc44.appspot.com",
    messagingSenderId: "913316920385",
    appId: "1:913316920385:web:0278d6a298e4cbfdee1ac0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);