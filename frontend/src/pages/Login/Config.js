import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3vXUJeYw28l-zHf1nl9BvP6TnUgCbFJE",
  authDomain: "yavi-80de1.firebaseapp.com",
  projectId: "yavi-80de1",
  storageBucket: "yavi-80de1.firebasestorage.app",
  messagingSenderId: "780555801969",
  appId: "1:780555801969:web:803d3285189b5a4ec512d0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
