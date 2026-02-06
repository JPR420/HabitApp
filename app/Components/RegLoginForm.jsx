import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Button from "./Button.jsx";

const RegLoginForm = ({ registration = false, submit, isLogin }) => {
  const [nameInputValue, setnameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const styles = StyleSheet.create({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      width: "85%",
      height: "35%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#88898b",
      borderRadius: 10,
      padding: 25,
    },

    fieldWrapper: {
      display: "flex",
      flexDirection: "column",
      width: "80%",
      height: "100%",
      justifyContent: "space-evenly",
      alignItems: "center",
    },

    input: {
      width: "80%",
      display: "flex",
      textAlign: "left",
      paddingLeft: 12,
      backgroundColor: "#fff",
      marginLeft: 5,
      borderRadius: 5,
    },

    inputContainer: {
      display: "flex",
      flexDirection: "row",
      width: "fit-content",
      height: "fit-content",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },

    inputRegistrationContainer: {},

    text: {
      color: "white",
      fontWeight: "bold",
      width: 70,
    },

    navigatorText:{
        display: "flex",
        width: "100%",
        height: "fit-content",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        transform: [{ translateY: 10 }],
    },

    navigatorTextContent: {
        fontSize: 13,
        color: "#3075ba",
        fontWeight: "bold",
    },
  });

  return (
    <View style={styles.formContainer}>
      <View style={styles.fieldWrapper}>
        {registration && (
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setnameInputValue}
              value={nameInputValue}
              placeholder="Name"
            />
          </View>
        )}
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmailInputValue}
            value={emailInputValue}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPasswordInputValue}
            value={passwordInputValue}
            placeholder="Password"
          />
        </View>
        {registration && (
          <Button
            buttonText="Register"
            onClick={() =>
              submit(nameInputValue, emailInputValue, passwordInputValue)
            }
          />
        )}

        {!registration && (
          <Button
            buttonText="Login"
            onClick={() => submit(emailInputValue, passwordInputValue)}
          />
        )}
        <View style={styles.navigatorText}>
          <Pressable onPress={() => isLogin()}>
            <Text style={styles.navigatorTextContent}> {registration ? "Have an account? Login" : "Don't have an account? Register"}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default RegLoginForm;
