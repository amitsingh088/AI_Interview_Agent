import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewagent-3f1c9.firebaseapp.com",
  projectId: "interviewagent-3f1c9",
  storageBucket: "interviewagent-3f1c9.firebasestorage.app",
  messagingSenderId: "803196191040",
  appId: "1:803196191040:web:dc114ec5eb9fc6793dfaa5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
