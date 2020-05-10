import app from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDX2dSqhW0uLJr_l5oFnIHh8vlItQr8MG0",
    authDomain: "productosmirador.firebaseapp.com",
    databaseURL: "https://productosmirador.firebaseio.com",
    projectId: "productosmirador",
    storageBucket: "productosmirador.appspot.com",
    messagingSenderId: "101109220782",
    appId: "1:101109220782:web:24b720fb2714bb7ac3343f",
    measurementId: "G-CWLQ67HPQV"
  };

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
        this.db = app.firestore();
    }
}
export default Firebase;