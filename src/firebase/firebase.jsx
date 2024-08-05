import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAbWdBYxig-VOO69oZNXPZ1lIl2-iubvpY",
	authDomain: "instagram-f1849.firebaseapp.com",
	projectId: "instagram-f1849",
	storageBucket: "instagram-f1849.appspot.com",
	messagingSenderId: "33777598383",
	appId: "1:33777598383:web:4126957748f0530f38395a",
	measurementId: "G-GW4S942F1T"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
