import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebase-config'
const firebaseApp = firebase.initializeApp
(firebaseConfig)


const api = firebaseApp.firestore()
api.settings({timestampsInSnapshots: true})
export default api