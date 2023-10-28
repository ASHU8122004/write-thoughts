import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD5SxdGJwnLARCRjkPCYSVmtWwVbCdKTjI",
  authDomain: "new-oneg.firebaseapp.com",
  projectId: "new-oneg",
  storageBucket: "new-oneg.appspot.com",
  messagingSenderId: "360963409065",
  appId: "1:360963409065:web:8f9fa61e4987a0eb7f95b8"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }
