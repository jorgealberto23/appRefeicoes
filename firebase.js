import {initializeApp} from "firebase/app";
import{getFirestore}from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNEGewNKrxOKIM_i_q76cQqD1FWJeHNSc",
    authDomain: "apprefeicaojorge.firebaseapp.com",
    projectId: "apprefeicaojorge",
    storageBucket: "apprefeicaojorge.appspot.com",
    messagingSenderId: "921167884565",
    appId: "1:921167884565:web:9dd649cbca71e9b955f91c"
  };

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);