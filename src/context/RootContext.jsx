import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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
  const [activeBucket, setActiveBucket] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  console.log("user", user);
  console.log("allItems", allItems);
  console.log("buckets", buckets);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser(userData);
        getAllBuckets(userData);
        getAllItems(userData);
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

  async function postItem(item) {
    try {
      const docRef = await addDoc(collection(db, "cards"), {
        ...item,
        uid: user.uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
    }
  }
  async function postBucket(bucket) {
    try {
      const docRef = await addDoc(collection(db, "buckets"), {
        name: bucket,
        uid: user.uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllItems(userData) {
    if (!userData) {
      console.log("user not defined in get all items");
      return;
    }
    const q = query(collection(db, "cards"), where("uid", "==", userData?.uid));

    const querySnapshot = await getDocs(q);
    let tempItems = [];
    querySnapshot.forEach((doc) => {
      tempItems.push({ id: doc.id, ...doc.data() });
    });
    setAllItems(tempItems);
  }

  async function getItemWithId(itemId) {
    try {
      const docRef = doc(db, "cards", itemId);
      const docSnap = await getDoc(docRef);
      console.log(docSnap);

      if (!docSnap.exists()) {
        console.log("No such document!");
      }
      return docSnap.data();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateItemWitId(itemId, item) {
    try {
      const docRef = doc(db, "cards", itemId);
      await updateDoc(docRef, item);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllBuckets(userData) {
    if (!userData) {
      console.log("user not defined in get all items");
      return;
    }
    const q = query(
      collection(db, "buckets"),
      where("uid", "==", userData?.uid)
    );

    const querySnapshot = await getDocs(q);
    let tempBuckets = [];
    querySnapshot.forEach((doc) => {
      tempBuckets.push({ id: doc.id, ...doc.data() });
    });
    setBuckets(tempBuckets);
  }

  async function deleteDocWithID(collection, itemId) {
    try {
      await deleteDoc(doc(db, collection, itemId));
      console.log(`${collection} obj with id: ${itemId} deleted`);
    } catch (error) {
      console.log(error);
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
    activeBucket,
    setActiveBucket,
    postItem,
    postBucket,
    deleteDocWithID,
    getItemWithId,
    updateItemWitId,
  };
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
}

export function useRootContext() {
  return useContext(RootContext);
}
