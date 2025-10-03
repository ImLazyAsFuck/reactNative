import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Button title="Bài 1" onPress={() => router.push("/E1/HomeScreen")} />
      <Button title="Bài 2" onPress={() => router.push("/E2/HomeScreen")} />
      <Button title="Bài 3" onPress={() => router.push("/E3/HomeScreen")} />
      <Button title="Bài 4" onPress={() => router.push("/E4/HomeScreen")} />
      <Button
        title="Bài 5"
        onPress={() => router.push("/E6/Feed/FeedListScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
