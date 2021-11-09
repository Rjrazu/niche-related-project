import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config"



const firebaseAuthenticationApp = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthenticationApp;