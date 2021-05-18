import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYDZ5o2gtfTaaoXov_impBbrCVtr51-QY",
    authDomain: "crud3-a6f32.firebaseapp.com",
    projectId: "crud3-a6f32",
    storageBucket: "crud3-a6f32.appspot.com",
    messagingSenderId: "9091027209",
    appId: "1:9091027209:web:29089d13432480dee803d8"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)