import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { itemsData, searchBucket } from "../data";

const firebaseConfig = {
  apiKey: "AIzaSyApIO6e_gIEzIKgUMhKcbbNXEbSercIlME",
  authDomain: "convix-5be26.firebaseapp.com",
  projectId: "convix-5be26",
  storageBucket: "convix-5be26.appspot.com",
  messagingSenderId: "942840311176",
  appId: "1:942840311176:web:663392c962c72761559e3d",
  measurementId: "G-RY096YD9Q2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const RootContext = createContext();

export default function RootContextProvider({ children }) {
  const [user, setUser] = useState();
  const [buckets, setBuckets] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  console.log("user", user);

  useEffect(() => {
    console.log("root context useEffect");
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      console.log("authstatechange lister");
      if (user) {
        setUser(user);
        setBuckets(searchBucket);
        setAllItems(itemsData);
      }
      setLoading(false);
    });
  }, []);

  async function handleGoogleAuth() {
    setLoading(true);
    setError();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  }

  async function handleSignOut() {
    try {
      await signOut(auth);
      setUser();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  const value = {
    user,
    error,
    loading,
    handleGoogleAuth,
    handleSignOut,
    allItems,
    setAllItems,
    buckets,
    setBuckets,
  };
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
}

export function useRootContext() {
  return useContext(RootContext);
}
