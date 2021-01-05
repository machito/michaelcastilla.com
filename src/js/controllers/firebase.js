/*
  Controller: Firebase
  File: firebase.js
*/

/* Core modules */
import Firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyAM2ezk3wRyeBE5ZA_x5ouyy5Vp1Y_AU5M",
  authDomain: "machito-portfolio.firebaseapp.com",
  databaseURL: "https://machito-portfolio.firebaseio.com",
  projectId: "machito-portfolio",
  storageBucket: "",
  messagingSenderId: "856289310527",
  appId: "1:856289310527:web:e8e53d52f4935444"
}
Firebase.initializeApp(config)

export default Firebase
