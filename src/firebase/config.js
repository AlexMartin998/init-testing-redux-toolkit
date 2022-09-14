// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB3Zlj1-Dj_rXLybSYGU3qweIxxhT6j0oA',
  authDomain: 'react-cursos-8a096.firebaseapp.com',
  projectId: 'react-cursos-8a096',
  storageBucket: 'react-cursos-8a096.appspot.com',
  messagingSenderId: '494200892877',
  appId: '1:494200892877:web:1be5f4809afee48fbde884',
};

// Initialize Firebase
export const FirebaeApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaeApp);
export const FirebaseDB = getFirestore(FirebaeApp);
