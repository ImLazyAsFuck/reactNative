import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const E3 = () => {
  const inputRef = useRef<TextInput>(null);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nhập tên" ref={inputRef} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => inputRef.current?.focus()}
      >
        <Text style={styles.buttonText}>Focus vào ô nhập dữ liệu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    borderColor: "#ddd",
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#04f",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
});

export default E3;
