import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyD_3qWY0Yc3MJhrwiozd1ZytTKCu-ehL8U",
    authDomain: "tan123-d6727.firebaseapp.com",
    projectId: "tan123-d6727",
    storageBucket: "tan123-d6727.appspot.com",
    messagingSenderId: "522834628064",
    appId: "1:522834628064:web:7e77eabdf6bad524fdaf85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app 