import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGyfbSe7G-2Yp7Iy-zlmdwPhUlcmofaTI",
  authDomain: "authen-c2937.firebaseapp.com",
  projectId: "authen-c2937",
  storageBucket: "authen-c2937.appspot.com",
  messagingSenderId: "899926118587",
  appId: "1:899926118587:web:fe821044d67755e279599e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);