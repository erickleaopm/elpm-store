import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: 'store-elpmdev.firebaseapp.com',
  projectId: 'store-elpmdev',
  storageBucket: 'store-elpmdev.appspot.com',
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
