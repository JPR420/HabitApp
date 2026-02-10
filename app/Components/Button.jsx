import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({ buttonText, onClick, disable }) => {
  const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor: "#3cc2e3",
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 3,
    },
    buttonPressed: {
      backgroundColor: "#32a1b8",
      transform: [{ scale: 0.96 }],
      shadowOpacity: 0.1,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
  });

  return (
    <Pressable
      disabled={disable}
      style={({ pressed }) => [
        styles.buttonStyle,
        pressed && styles.buttonPressed, // Apply when pressed
      ]}
      onPress={onClick}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

export default Button;
