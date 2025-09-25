import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const E2 = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={styles.title}>Bài 2:</Text>
      <View style={styles.container}>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Increment" onPress={() => setCount(count + 1)} />
          <Button title="Decrement" onPress={() => setCount(count - 1)} />
        </View>
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
  count: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});

export default E2;
