import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const E1 = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.increaseButton]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Tăng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.decreaseButton]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>Giảm</Text>
        </TouchableOpacity>
      </View>
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
  count: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#2f95dc",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    minWidth: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  increaseButton: {
    backgroundColor: "#4CAF50",
  },
  decreaseButton: {
    backgroundColor: "#f44336",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default E1;
