import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../utils/colors";
const TodoModal = (props) => {
  const [list, setList] = useState(props.list);

  const totalTask = list.length;
  const completedTask = list.filter((todo) => todo.completed).length;

  const renderTodo = (todo) => {
    return (
      <View style={styles.container}>
        <Text>{todo.title}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 64, right: 32, zIndex: 10 }}
        onPress={props.closeModal}
      >
        <AntDesign name="close" size={24} color={COLORS.black} />
      </TouchableOpacity>
      <View style={[styles.section, styles.header]}>
        <Text style={styles.title}>Y</Text>
        <Text style={styles.taskCount}>
          {completedTask} of {totalTask} tasks
        </Text>
      </View>
      <View style={(styles.section, { flex: 3 })}>
        <FlatList
          data={list}
          renderItem={renderTodo}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: "64",
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.black,
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: COLORS.grey,
    fontWeight: 600,
  },
});

export default TodoModal;
