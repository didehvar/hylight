import firebase from 'firebase'

firebase.initializeApp({
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'hylight-fbcc1.firebaseapp.com',
  databaseURL: 'https://hylight-fbcc1.firebaseio.com',
  projectId: 'hylight-fbcc1',
  storageBucket: 'hylight-fbcc1.appspot.com',
  messagingSenderId: '1075549394055'
})
