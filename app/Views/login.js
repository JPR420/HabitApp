import { useState } from "react";
import { ScrollView, Text, StyleSheet, FlatList, View } from "react-native";
import Form from "../Components/RegLoginForm.jsx";

const Login = () => {
const [isRegistration, setIsRegistration] = useState(false);

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#b21414",
    },
    text: {
      color: "#fff",
      backgroundColor: "#181717",
    },
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Login Screen</Text>
        <Form registration={isRegistration} isLogin={() => setIsRegistration(!isRegistration)} />
      </View>
    </ScrollView>
  );
};

export default Login;
