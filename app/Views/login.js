import { useState } from "react";
import { ScrollView, Text, StyleSheet, FlatList, View } from "react-native";
import Form from "../Components/RegLoginForm.jsx";
import AnimatedBackground from "../Components/AnimatedBackground.jsx";

const Login = () => {
  const [isRegistration, setIsRegistration] = useState(false);

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

  return (
    <View style={{ flex: 1 }}>
      <AnimatedBackground />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Form
            registration={isRegistration}
            isLogin={() => setIsRegistration(!isRegistration)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
