import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBwuSYuFEQozR79xaR4JQT00bix05qWPKo",
  authDomain: "crwn-db-b90bc.firebaseapp.com",
  databaseURL: "https://crwn-db-b90bc.firebaseio.com",
  projectId: "crwn-db-b90bc",
  storageBucket: "crwn-db-b90bc.appspot.com",
  messagingSenderId: "26497623926",
  appId: "1:26497623926:web:3d3fbad846deaba195fc57",
  measurementId: "G-DPHPNZPE5K",
};

export const createUserProfileDocument = async (userAuth, additionaData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionaData,
      });
    } catch (err) {
      console.log("Error occured " + err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
