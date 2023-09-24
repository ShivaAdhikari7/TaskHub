import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../utils/colors";
import tempData from "../../tempData";
import TodoList from "../components/TodoList";
function HomeScreen() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 25, marginBottom: 50, marginTop: 30 }}>
          {greeting}
          {", "}
          <Text style={{ fontWeight: "700" }}>Shiva Adhikari</Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divide} />
        <Text style={styles.title}>
          <Text style={{ color: COLORS.primary, fontWeight: "500" }}>
            ToDo{" "}
          </Text>
          List
        </Text>
        <View style={styles.divide} />
      </View>

      <View style={{ height: 275, paddingLeft: 32 }}>
        <TodoList list={tempData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },
  divide: {
    backgroundColor: COLORS.secondary,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.black,
    paddingHorizontal: 5,
  },
});
export default HomeScreen;
