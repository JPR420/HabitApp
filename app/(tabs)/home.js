import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

const Home = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      if (!token) {
        router.replace("/(auth)/login");
      }
    };

    checkToken();
  }, []);

  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("refreshToken");
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text onPress={logout} style={{ marginTop: 20, color: "#3075ba", fontWeight: "bold" }}>Logout</Text>
    </View>
  );
};

export default Home;
