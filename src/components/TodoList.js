import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../utils/colors";
import Button from "./Button";

export default TodoList = ({ list }) => {
  const completed = list.filter((todo) => todo.completed).length;
  const remaining = list.length - completed;
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.listTitle}>Today's TODO:</Text>

        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{remaining}</Text>
            <Text style={styles.countTitle}>Remaining</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{completed}</Text>
            <Text style={styles.countTitle}>Completed</Text>
          </View>
        </View>
      </View>
      <Button
        filled
        title="Add task"
        style={{ fontWeight: "500", marginTop: 40, width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 32,
    marginTop: 50,
    alignItems: "center",
    width: 200,
    backgroundColor: COLORS.secondary,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.white,
    marginBottom: 18,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: COLORS.white,
  },
  countTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.white,
  },
});
