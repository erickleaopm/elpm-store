import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDmqL6NH-x1e0ICuPm0il33ZTWbGFgZgUg',
  authDomain: 'store-elpmdev.firebaseapp.com',
  projectId: 'store-elpmdev',
  storageBucket: 'store-elpmdev.appspot.com',
  messagingSenderId: '445423638309',
  appId: '1:445423638309:web:258bc2b90ce7db575caccc'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
