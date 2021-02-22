import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBCUM8MvA9tuQxZhino9bdKIuxGnD3QQCg",
    authDomain: "react-app-projects-593a3.firebaseapp.com",
    projectId: "react-app-projects-593a3",
    storageBucket: "react-app-projects-593a3.appspot.com",
    messagingSenderId: "1067289853327",
    appId: "1:1067289853327:web:141cc608dd6b17d25d9ffa",
    measurementId: "G-KZP7V10PTH"
};
firebase.initializeApp(firebaseConfig);

const firebaseDb = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebaseDb, googleAuthProvider, firebase }