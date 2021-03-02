import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDTvMFhpmnU3H6rl5ssQq253xjUmn1Rz0A",
    authDomain: "restaurants-137db.firebaseapp.com",
    projectId: "restaurants-137db",
    storageBucket: "restaurants-137db.appspot.com",
    messagingSenderId: "171077878521",
    appId: "1:171077878521:web:0d911eca488d9dedc9d828"
  }

export const firebaseApp = firebase.initializeApp(firebaseConfig)