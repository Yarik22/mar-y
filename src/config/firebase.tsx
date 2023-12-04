import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API}`,
  authDomain: "marcy-33849.firebaseapp.com",
  projectId: "marcy-33849",
  storageBucket: "marcy-33849.appspot.com",
  messagingSenderId: "806891573896",
  appId: "1:806891573896:web:24f2e443dd809c3a76c53d",
  measurementId: "G-Q48T5S881H",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
