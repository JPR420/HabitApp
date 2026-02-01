// app/index.js
import { View,StyleSheet } from "react-native";
import SplashScreen from "./Views/splash.js";

export default function Index() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,      
      justifyContent: 'center',
      alignItems: 'center',
     
    },
  });

  return (
    <View style={styles.container}>
      <SplashScreen />
    </View>
  );
}


