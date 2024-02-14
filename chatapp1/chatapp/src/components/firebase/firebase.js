import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyD-3XiVtAWIDYzBCCwN48bGC24-P34E_3U",
  authDomain: "chatapp-by-nit.firebaseapp.com",
  projectId: "chatapp-by-nit",
  storageBucket: "chatapp-by-nit.appspot.com",
  messagingSenderId: "276721440331",
  appId: "1:276721440331:web:b65514c897dca6827a9fce",
  measurementId: "G-K8W2Q23N7W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);