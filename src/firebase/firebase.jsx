import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAxvyYN55feKaIx5u2fES-cjqwYlp7P_cg",
	  authDomain: "instagram-572da.firebaseapp.com",
	  projectId: "instagram-572da",
	  storageBucket: "instagram-572da.appspot.com",
	  messagingSenderId: "557146395658",
	  appId: "1:557146395658:web:fa3c75f331f2d78767bbf3",
	  measurementId: "G-K3W4D5BHTP"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
