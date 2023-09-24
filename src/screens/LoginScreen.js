import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";

import COLORS from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";
const LoginScreen = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const isUserLogin = await auth().signInWithEmailAndPassword(
        email,
        password
      );
      setMessage("");
      console.log(isUserLogin);

      navigation.navigate("Home", {
        email: isUserLogin.user.email,
        uid: isUserLogin.user.uid,
      });
    } catch (err) {
      console.log(err);

      setMessage(err.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={styles.heading}>Login to TaskHub</Text>
          <Text style={styles.subheading}>
            Continue where you left off and stay productive.
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.email}>Email Address</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{ width: "100%" }}
              value={email}
              onChangeText={(value) => setEmail(value)}
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
              value={password}
              onChangeText={(value) => setPassword(value)}
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
          onPress={() => handleLogin()}
          title="Login"
          filled
          style={{ marginTop: 18, marginBottom: 4 }}
        />
        <Text style={{ fontSize: 18, color: COLORS.grey }}>{message}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              textDecorationLine: "underline",
              textDecorationColor: COLORS.primary,
              flex: 1,
              textAlign: "center",
            }}
          >
            Or Login with
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => {}} style={styles.logo}>
            <Image
              source={require("../../assets/facebook.png")}
              style={{ height: 36, width: 36, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.logo}>
            <Image
              source={require("../../assets/google.png")}
              style={{ height: 36, width: 36, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={styles.footerText}>Don't have an account</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Register
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

  logo: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 50,
    borderRadius: 10,
  },
  footerText: {
    fontSize: 16,
    color: COLORS.black,
  },
});

export default LoginScreen;
