import { Background } from "@react-navigation/elements";
import { ScrollView, Text, StyleSheet, FlatList, View } from "react-native";

const Login = () => {
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
      </View>
    </ScrollView>
  );
};

export default Login;
