import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router"; 

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

    useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/Views/login"); 
    }, 2000);

        return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;
