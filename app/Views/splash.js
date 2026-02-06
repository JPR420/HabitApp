import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import status from "../../services/status";


const SplashScreen = () => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#4A90E2",
    },
    text: {
      color: "#fff",
      fontSize: 24,
      textAlign: "center",
    },
  });

  const checkStatus = async () => {
    try {
      const response = await status();
      if (response && response.msg === "okay") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };


useEffect(() => {
  const run = async () => {
    const ok = await checkStatus();

    await new Promise(r => setTimeout(r, 2000));
    if (ok) {
      router.replace("/Views/login");
    } else {
      router.replace("/Views/error");
    }
  };

  run();
}, []);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;
