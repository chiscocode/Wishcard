import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,
sendPasswordResetEmail,signOut} from "firebase/auth";
import {getFirestore,query,getDocs,collection,where,addDoc,} from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC1cDF6ukJ7qquYnjooax_vWKx8-yePsx0",
  authDomain: "wishcard-87eb4.firebaseapp.com",
  projectId: "wishcard-87eb4",
  storageBucket: "wishcard-87eb4.appspot.com",
  messagingSenderId: "443516060647",
  appId: "1:443516060647:web:adbd6f5beed3b2345d7342",
  measurementId: "G-RYBHG8GZ7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

const registerWithEmailAndPassword = async (name, email, password) => {
try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email,
    });
} catch (err) {
    console.error(err);
    alert(err.message);
}
};

const sendPasswordReset = async (email) => {
try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
} catch (err) {
    console.error(err);
    alert(err.message);
}
};

const logout = () => {
signOut(auth);
};


export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    signInWithEmailAndPassword,
    logout,
  };