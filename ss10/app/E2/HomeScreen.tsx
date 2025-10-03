import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function E2HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Đây là màn hình Home</Text>
      <Button title="Quay lại trang chủ" onPress={() => router.push("/")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
