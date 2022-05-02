// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBMyAR9MdVR9enMzLUwdxuan-K_OupETKg",
  authDomain: "geniuscarwithdatabase.firebaseapp.com",
  projectId: "geniuscarwithdatabase",
  storageBucket: "geniuscarwithdatabase.appspot.com",
  messagingSenderId: "533978355897",
  appId: "1:533978355897:web:b72e0270d0151469afa368",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
