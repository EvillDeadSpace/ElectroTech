// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHwSF-mwbakr0GiOlKyY7ORdk1xc2lTCE",
  authDomain: "electrotech-b715c.firebaseapp.com",
  projectId: "electrotech-b715c",
  storageBucket: "electrotech-b715c.appspot.com",
  messagingSenderId: "426570592806",
  appId: "1:426570592806:web:14a756e4558544cee6ece7",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

//firebass datebase

export const db = getFirestore();

export const createuserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //if user date not exists

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }

    return userDocRef;
  }
};

//if user date does not exist create user

//crate / set user date

//user check if exist

//if user date not exist create user
