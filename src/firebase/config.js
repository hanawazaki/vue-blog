import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBt9cU269EOYMW4K_3q3T1q-mC-5qYO74c",
    authDomain: "blog-vue-a2f67.firebaseapp.com",
    databaseURL: "https://blog-vue-a2f67.firebaseio.com",
    projectId: "blog-vue-a2f67",
    storageBucket: "blog-vue-a2f67.appspot.com",
    messagingSenderId: "790507236164",
    appId: "1:790507236164:web:9ca6ce89c32ce4452e4511",
    measurementId: "G-RGWHL4CRSY"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {
    projectFirestore, timestamp
}