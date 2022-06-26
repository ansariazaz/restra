import {getApp,getApps,initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDQdVZgZ6cCiVlAQkT3AccawRwDKwmkEg8",
    authDomain: "restra-app-8f836.firebaseapp.com",
    databaseURL: "https://restra-app-8f836-default-rtdb.firebaseio.com",
    projectId: "restra-app-8f836",
    storageBucket: "restra-app-8f836.appspot.com",
    messagingSenderId: "781411831667",
    appId: "1:781411831667:web:1ff609c04d6c635b35bf06"
  };


  const app = getApps.length > 0 ? getApp():initializeApp(firebaseConfig)

  const firestore = getFirestore(app)

  const storage = getStorage(app)

  export {app,firestore,storage}