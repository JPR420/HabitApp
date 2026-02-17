import { use, useState } from "react";
import { ScrollView, Text, StyleSheet, FlatList, View } from "react-native";
import Form from "../Components/RegLoginForm.jsx";
import AnimatedBackground from "../Components/AnimatedBackground.jsx";
import {
  login,
  register,
  checkRefreshToken,
} from "../../services/auth.service.js";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";
import { useEffect } from "react";
import LoadingScreen from "../Components/Loading.jsx";

const Login = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const checkToken = async () => {
      const refreshTokenValue = await SecureStore.getItemAsync("refreshToken");
      if (refreshTokenValue) {
        try {
          const response = await checkRefreshToken(refreshTokenValue);
          if (response.data === true) {
            router.replace("/(tabs)/home");
            return; 
          } else {
            await SecureStore.deleteItemAsync("refreshToken");
            await SecureStore.deleteItemAsync("token");
          }
        } catch (err) {
          await SecureStore.deleteItemAsync("refreshToken");
          await SecureStore.deleteItemAsync("token");
        }
      }
      setLoading(false); 
    };
    checkToken();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const data = await login(email, password);
      if (data.success === true) {
        setApiResponse("Login successful!");
        await SecureStore.setItemAsync("token", data.data.token);
        await SecureStore.setItemAsync("refreshToken", data.data.refreshToken);
        await new Promise((r) => setTimeout(r, 2000));
        router.replace("/(tabs)/home");
      }
      if (data.success === false) {
        setApiResponse(data.error);
      }
    } catch (err) {
      setApiResponse("Login failed: " + err.message);
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const data = await register(name, email, password);
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

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <View style={{ flex: 1 }}>
      <AnimatedBackground />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Form
            registration={isRegistration}
            isLogin={() => setIsRegistration(!isRegistration)}
            submit={submit}
            APIresponse={apiResponse}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
