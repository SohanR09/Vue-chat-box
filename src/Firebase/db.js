import firebase from 'firebase/app';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyDWTUcPvIzDohQxYx2nmgJ-giqlXRiVwXo",
    authDomain: "vue-chat-box-c226d.firebaseapp.com",
    projectId: "vue-chat-box-c226d",
    storageBucket: "vue-chat-box-c226d.appspot.com",
    messagingSenderId: "216546586277",
    appId: "1:216546586277:web:f609f20382bc1a7ac9674c",
    measurementId: "G-WS948G997H"
}

const db = firebase.initializeApp(config);
export default db;
