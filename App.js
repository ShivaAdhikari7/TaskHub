import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getFireStore, setDoc, doc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBQgwuzfrs4QqRwDrdSZtlGNtI1GMNrtyk",
  authDomain: "todo-1cf2b.firebaseapp.com",
  databaseURL:
    "https://todo-1cf2b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-1cf2b",
  storageBucket: "todo-1cf2b.appspot.com",
  messagingSenderId: "456915663453",
  appId: "1:456915663453:web:6fa03127696223b99eabb4",
};
initializeApp(firebaseConfig);

const sendData = async () => {
  const firestore = getFireStore();

  await setDoc(doc(firestore, "users", "user_id"), {
    name: "Shiva Adhikari",
    email: "shivaadhikari499@gmail.com",
    age: 25,
  });
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up </Text>
      <Text>Hello </Text>
      <button onPress={sendData}>Send Data</button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
