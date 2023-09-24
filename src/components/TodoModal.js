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

const TodoModal = (props) => {
  const [inputTextValue, setInputTextValue] = useState(null);
  const [list, setList] = useState(null);
  const [isUpdateData, setIsUpdateData] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  useEffect(() => {
    getDatabase();
  }, []);
  const getDatabase = async () => {
    try {
      // const data = await database().ref('todo').once('value');
      const data = await database()
        .ref("todo")
        .on("value", (tempData) => {
          console.log(data);
          setList(tempData.val());
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddData = async () => {
    try {
      if (inputTextValue.length > 0) {
        const index = list.length;
        const response = await database().ref(`todo/${index}`).set({
          value: inputTextValue,
        });

        console.log(response);

        setInputTextValue("");
      } else {
        alert("Please Enter Value & Then Try Again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateData = async () => {
    try {
      if (inputTextValue.length > 0) {
        const response = await database()
          .ref(`todo/${selectedCardIndex}`)
          .update({
            value: inputTextValue,
          });

        console.log(response);
        setInputTextValue("");
        setIsUpdateData(false);
      } else {
        alert("Please Enter Value & Then Try Again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCardPress = (cardIndex, cardValue) => {
    try {
      setIsUpdateData(true);
      setSelectedCardIndex(cardIndex);
      setInputTextValue(cardValue);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCardLongPress = (cardIndex, cardValue) => {
    try {
      Alert.alert("Alert", `Are You Sure To Delete ${cardValue} ?`, [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Cancel Is Press");
          },
        },
        {
          text: "Ok",
          onPress: async () => {
            try {
              const response = await database()
                .ref(`todo/${cardIndex}`)
                .remove();

              setInputTextValue("");
              setIsUpdateData(false);
              console.log(response);
            } catch (err) {
              console.log(err);
            }
          },
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };
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
        {!isUpdateData ? (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddData()}
          >
            <Text style={{ color: "#fff" }}>Add</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleUpdateData()}
          >
            <Text style={{ color: "#fff" }}>Update</Text>
          </TouchableOpacity>
        )}
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
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
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
            renderItem={(item) => {
              const cardIndex = item.index;
              if (item.item !== null) {
                return (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => handleCardPress(cardIndex, item.item.value)}
                    onLongPress={() =>
                      handleCardLongPress(cardIndex, item.item.value)
                    }
                  >
                    <Text>{item.item.value}</Text>
                  </TouchableOpacity>
                );
              }
            }}
          />
        </View>
        <View style={[styles.section, styles.footer]}>
          <TextInput style={[styles.input, { borderColor: COLORS.primary }]} />
          <TouchableOpacity
            style={[styles.addTodo, { backgroundColor: COLORS.primary }]}
          >
            <AntDesign name="plus" size={16} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
