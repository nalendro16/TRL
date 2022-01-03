import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDA3bfQbd_y0CDTRJrJYgjjJMrMr1FVVo4',
  authDomain: 'thereactlab.firebaseapp.com',
  projectId: 'thereactlab',
  storageBucket: 'thereactlab.appspot.com',
  messagingSenderId: '283197723637',
  appId: '1:283197723637:web:f0a988185c1724933f06bc',
}

//   init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
