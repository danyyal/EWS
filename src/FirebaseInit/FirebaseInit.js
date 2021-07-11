import firebase from "firebase/app"
import { firebaseConfig } from "../Firebase/config"
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();