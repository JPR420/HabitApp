import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";

const RegLoginForm = ({ registration = false, submit, isLogin, APIresponse = null }) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Regex patterns
  const nameRegex = /^[a-zA-Z\s]*$/; // letters & spaces only
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  // Live validation
  useEffect(() => {
    if (registration) {
      if (!nameInputValue) setNameError("");
      else if (!nameRegex.test(nameInputValue))
        setNameError("Name can only contain letters and spaces");
      else setNameError("");
    }
  }, [nameInputValue, registration]);

  useEffect(() => {
    if (!emailInputValue) setEmailError("");
    else if (!emailRegex.test(emailInputValue))
      setEmailError("Invalid email format");
    else setEmailError("");
  }, [emailInputValue]);

  useEffect(() => {
    if (!passwordInputValue) setPasswordError("");
    else if (!passwordRegex.test(passwordInputValue))
      setPasswordError(
        "Password must have uppercase, lowercase, number, special char, min 8",
      );
    else setPasswordError("");
  }, [passwordInputValue]);

  // Handle submit
  const handleSubmit = () => {
    if (registration) {
      if (nameError || emailError || passwordError) return;
      submit(nameInputValue, emailInputValue, passwordInputValue);
    } else {
      if (emailError || passwordError) return;
      submit(emailInputValue, passwordInputValue);
    }
  };

  // Enable/disable button based on empty fields
  useEffect(() => {
    if (registration) {
      setDisableButton(
        !nameInputValue || !emailInputValue || !passwordInputValue,
      );
    } else {
      setDisableButton(!emailInputValue || !passwordInputValue);
    }
  }, [nameInputValue, emailInputValue, passwordInputValue, registration]);

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

    navigatorText: {
      display: "flex",
      width: "100%",
      height: "fit-content",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      transform: [{ translateY: 10 }],
    },
    errorTextContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "fit-content",
      justifyContent: "center",
      alignItems: "flex-start",
    },

    errorText: {
      width: "100%",
      color: "#ff4d4d",
      fontSize: 12,
      textAlign: "center",
      marginBottom: 2,
    },

    navigatorTextContent: {
      fontSize: 13,
      color: "#3075ba",
      fontWeight: "bold",
    },

    button: {
      position: "absolute",
      right: 10,
    },
  });

  return (
    <View
      style={
        registration
          ? [styles.formContainer, { height: "43%" }]
          : styles.formContainer
      }
    >
      <View style={styles.fieldWrapper}>
        {registration && (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Name:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setNameInputValue}
                value={nameInputValue}
                placeholder="Name"
              />
            </View>

            {nameError ? (
              <View style={styles.errorTextContainer}>
                <Text style={styles.errorText}>{nameError}</Text>
              </View>
            ) : null}
          </>
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
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPasswordInputValue}
            value={passwordInputValue}
            placeholder="Password"
            textContentType="password"
            autoComplete="current-password"
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.button}
          >
            <Text>{showPassword ? "Hide" : "Show"}</Text>
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
        <Button
          disable={disableButton}
          buttonText={registration ? "Register" : "Login"}
          onClick={handleSubmit}
        />
        {APIresponse && <Text style={{ margin: 6, color: "#ef2b2b", fontSize: 13, width: "100%", textAlign: "center" }}>{APIresponse}</Text>}
        <View style={styles.navigatorText}>
          <Pressable onPress={() => isLogin()}>
            <Text style={styles.navigatorTextContent}>
              {" "}
              {registration
                ? "Have an account? Login"
                : "Don't have an account? Register"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default RegLoginForm;
