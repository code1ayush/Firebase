import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0pJMZ5BOqHKM9V6jswqqawwga4OQPV28",
  authDomain: "fir-dc608.firebaseapp.com",
  databaseURL: "https://fir-dc608-default-rtdb.firebaseio.com",
  projectId: "fir-dc608",
  storageBucket: "fir-dc608.appspot.com",
  messagingSenderId: "362096921282",
  appId: "1:362096921282:web:4fe7d6cbd889f3c226895b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
