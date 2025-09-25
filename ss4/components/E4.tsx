import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Info from "./Info";

const E4 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    setShowAlert(true);
  };

  const onClose = () => {
    setShowAlert(false);
  };
  return (
    <View>
      {showAlert && (
        <Info
          email={email}
          password={password}
          visible={showAlert}
          onClose={onClose}
        />
      )}
      <Text style={styles.title}>Bài 4:</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={() => handleSubmit()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
  },
});

export default E4;
