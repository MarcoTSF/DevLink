import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAVJ3toIVdzyr3Zko88miOcLumDLtrc2JA",
  authDomain: "devlinks-mtsf.firebaseapp.com",
  projectId: "devlinks-mtsf",
  storageBucket: "devlinks-mtsf.appspot.com",
  messagingSenderId: "670557791172",
  appId: "1:670557791172:web:acf856d9383fc52a593a91",
  measurementId: "G-TQB5ZFSCL5"
};

const firebaseapp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseapp)
const auth = getAuth(firebaseapp)

export { db, auth };