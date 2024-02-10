import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyChqpmuphKutYedZNUmc7EkGfxs8N0-o4s",
  authDomain: "privatenet-2bfe4.firebaseapp.com",
  projectId: "privatenet-2bfe4",
  storageBucket: "privatenet-2bfe4.appspot.com",
  messagingSenderId: "549358111473",
  appId: "1:549358111473:web:7ed03987485296f8da3750"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()
export const storage = getStorage();

export const db=getFirestore()
