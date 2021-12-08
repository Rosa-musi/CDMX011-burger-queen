import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBJh_dO2IBUspVdu4nybcazlYF4JZuRUwM",
  authDomain: "burgerqueen-f9b15.firebaseapp.com",
  projectId: "burgerqueen-f9b15",
  storageBucket: "burgerqueen-f9b15.appspot.com",
  messagingSenderId: "246926756748",
  appId: "1:246926756748:web:c05d35d3af622cc03ca4a9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app