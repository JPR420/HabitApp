import { Pressable, Text,StyleSheet } from "react-native";

const Button = ({ buttonText, onClick }) => {
    const styles = StyleSheet.create({
        buttonStyle: {
            backgroundColor: "#3cc2e3",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
        }
    });

  return (
    <Pressable style={styles.buttonStyle} onPress={onClick}>
      <Text>{buttonText}</Text>
    </Pressable>
  );
};

export default Button;