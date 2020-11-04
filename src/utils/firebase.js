import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCa-xrPMj0uiP4u9ikzdlnfAPn2y0-W-q4",
    authDomain: "mattu-chat.firebaseapp.com",
    databaseURL: "https://mattu-chat.firebaseio.com",
    projectId: "mattu-chat",
    storageBucket: "mattu-chat.appspot.com",
    messagingSenderId: "1075967363955",
    appId: "1:1075967363955:web:b3d6c157392db66e8d9306",
    measurementId: "G-66SQSE8SC8"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.database()

export { db }

