import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import COLORS from "../utils/colors";
import tempData from "../../tempData";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const TodoModal = (props) => {
  const [list, setList] = useState(tempData);

  const totalTask = list.length;
  const completedTask = list.filter((todo) => todo.completed).length;

  const renderTodo = (list) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity>
          <Ionicons
            name={list.item.completed ? "ios-square" : "ios-square-outline"}
            size={24}
            color={COLORS.greydark}
            style={{ width: 32 }}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.todo,
            {
              textDecorationLine: list.item.completed ? "line-through" : "none",
              color: list.item.completed ? COLORS.greydark : COLORS.black,
            },
          ]}
        >
          {list.item.title}
        </Text>
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
        <View>
          <Text style={styles.title}>Your Today's Task</Text>
          <Text style={styles.taskCount}>
            {completedTask} of {totalTask} tasks
          </Text>
        </View>
      </View>
      <View style={[styles.section, { flex: 3 }]}>
        <FlatList
          data={list}
          renderItem={renderTodo}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <KeyboardAvoidingView
        style={[styles.section, styles.footer]}
        behavior="padding"
      >
        <TextInput style={[styles.input, { borderColor: COLORS.primary }]} />
        <TouchableOpacity
          style={[styles.addTodo, { backgroundColor: COLORS.primary }]}
        >
          <AntDesign name="plus" size={16} color={COLORS.white} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    marginLeft: 64,
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
    color: COLORS.greydark,
    fontWeight: "800",
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 0,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    color: COLORS.black,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default TodoModal;
