import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth , createUserWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyBS_ArHZV-rHNhWDvmnVFcER9rKKEKEsCw",
    authDomain: "practice-project-6914b.firebaseapp.com",
    projectId: "practice-project-6914b",
    storageBucket: "practice-project-6914b.appspot.com",
    messagingSenderId: "538137619769",
    appId: "1:538137619769:web:1880b16c79ac4f926b0ce8",
    measurementId: "G-DYF2XMLYR2"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export {app , auth ,createUserWithEmailAndPassword}