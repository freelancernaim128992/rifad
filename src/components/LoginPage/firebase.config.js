import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCXm-3Ny2yfyNJu0OdkFnYvMfx8M037thM",
  authDomain: "car-selling-d5e02.firebaseapp.com",
  projectId: "car-selling-d5e02",
  storageBucket: "car-selling-d5e02.appspot.com",
  messagingSenderId: "714473080603",
  appId: "1:714473080603:web:f659265559531b4828b5be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)