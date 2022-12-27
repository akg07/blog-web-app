import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA_GfwEYjnWtk1BZcL--er4s6HEBWGX4s",
    authDomain: "blog-web-app-651c7.firebaseapp.com",
    projectId: "blog-web-app-651c7",
    storageBucket: "blog-web-app-651c7.appspot.com",
    smessagingSenderId: "807611452868",
    appId: "1:807611452868:web:6be0e86cea3f91dbefe891"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();