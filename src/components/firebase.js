import firebase from 'firebase'
import 'firebase/auth'


const app = firebase.initializeApp ({
  apiKey: "AIzaSyA1lpV6hZTqcbTPxzJW-X5ooj0Qzb_T2yM",
  authDomain: "auth-development-b13c7.firebaseapp.com",
  projectId: "auth-development-b13c7",
  storageBucket: "auth-development-b13c7.appspot.com",
  messagingSenderId: "1075443586270",
  appId: "1:1075443586270:web:5cb40814ed5b8b79f89e4f"
  })


  export const auth = app.auth()
  export default app;
