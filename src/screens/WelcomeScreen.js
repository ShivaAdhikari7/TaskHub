import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../utils/colors";
import Button from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={style.container}>
        <Text style={style.title}>TaskHub</Text>
        <Image
          style={style.image}
          source={require("../../assets/todoicon.png")}
        />
        <View style={style.content}>
          <Text style={style.contentTitle}>Welcome to TaskHub</Text>

          <Text style={style.contentDescription}>
            Get organized, boost productivity, and never miss a task with
            TaskHub. Whether it's work, study, or daily chores, we've got you
            covered.
          </Text>
          <Button
            title="Plan your Day"
            style={{ marginTop: 60 }}
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: 50,
    position: "absolute",
    top: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    top: 270,
  },
  content: {
    position: "absolute",
    top: 400,
  },
  contentTitle: {
    color: COLORS.white,
    fontSize: 33,
    marginHorizontal: 20,
    marginBottom: 30,
    fontWeight: "700",
  },

  contentDescription: {
    fontSize: 15,
    marginHorizontal: 25,
    color: COLORS.white,
    lineHeight: 25,
  },
});
export default WelcomeScreen;
