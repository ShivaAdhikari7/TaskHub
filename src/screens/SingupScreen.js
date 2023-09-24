import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
import COLORS from "../utils/colors";

const SingupScreen = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={styles.heading}>Create Account</Text>
          <Text style={styles.subheading}>
            Get organized and never miss a task
          </Text>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.email}>Name</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor={COLORS.black}
              keyboardType="default"
              style={{ width: "100%" }}
            />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.email}>Email Address</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{ width: "100%" }}
            />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.email}>Password</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={{ width: "100%" }}
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 12 }}
              onPress={() => setIsPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown && (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              )}
              {!isPasswordShown && (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="Sign Up"
          filled
          style={{ marginTop: 18, marginBottom: 4 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <View style={styles.text}>
          <Text style={{ fontSize: 14 }}> Or sign Up with</Text>

          <View style={styles.text}></View>
        </View>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/todo.png")}
            style={{ height: 36, width: 36, marginRight: 8 }}
            resizeMode="contain"
          />
          <Text>Facebook</Text>
        </View>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/todo.png")}
            style={{ height: 36, width: 36, marginRight: 8 }}
            resizeMode="contain"
          />
          <Text>Google</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={styles.footerText}>Already have an account</Text>
          <Pressable onPress={() => navigtion.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: COLORS.black,
  },
  subheading: {
    fontSize: 16,
    color: COLORS.black,
  },
  email: {
    fontSize: 16,
    marginVertical: 8,
    fontWeight: "400",
  },
  input: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  text: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  logo: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10,
  },
  footerText: {
    fontSize: 16,
    color: COLORS.black,
  },
});

export default SingupScreen;
