import Navigator from "./src/navigation/Navigator";
import { initializeApp } from "firebase/app";
import { getFireStore, setDoc, doc } from "firebase/firestore";
export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBu89pHXB1ZPf_KNjmu8vO5Z3rWso_RpQM",
    authDomain: "taskhub-c449e.firebaseapp.com",
    projectId: "taskhub-c449e",
    storageBucket: "taskhub-c449e.appspot.com",
    messagingSenderId: "496997279902",
    appId: "1:496997279902:web:c4f12e48f761c551c4338f",
  };
  initializeApp(firebaseConfig);

  return <Navigator />;
}
