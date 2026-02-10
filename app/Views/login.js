import { useState } from "react";
import { ScrollView, Text, StyleSheet, FlatList, View } from "react-native";
import Form from "../Components/RegLoginForm.jsx";
import AnimatedBackground from "../Components/AnimatedBackground.jsx";
import { login, register } from "../../services/auth.service.js";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

const Login = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
    },
    text: {
      color: "#fff",
      backgroundColor: "transparent",
    },
  });

  const handleLogin = async (email, password) => {
    try {
      const data = await login(email, password);
      if (data.success === true) {
        setApiResponse("Login successful!");
        const token = data.data;
        try {
          await SecureStore.setItemAsync("token", token);
        } catch (storeError) {}
        router.replace("/home");
      }
    } catch (err) {
      setApiResponse("Login failed: " + err.message);
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const data = await register(name, email, password);
      console.log("Register response:", data);
      if (data.success === true) {
        setApiResponse("Registration successful! Please log in.");
        setIsRegistration(false);
      }
    } catch (err) {
      setApiResponse("Registration failed: " + err.message);
    }
  };

  // Single submit function
  const submit = (nameOrEmail, emailOrPassword, password) => {
    if (isRegistration) {
      handleRegister(nameOrEmail, emailOrPassword, password);
    } else {
      handleLogin(nameOrEmail, emailOrPassword);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AnimatedBackground />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Form
            registration={isRegistration}
            isLogin={() => setIsRegistration(!isRegistration)}
            submit={submit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
