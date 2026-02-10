import { View, Text } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

const Home = () => {
  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      
      if (!token) {
        router.replace("/Views/login");
      }
    };

    checkToken();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
