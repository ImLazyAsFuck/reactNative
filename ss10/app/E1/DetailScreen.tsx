import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>E1 DetailScreen</Text>
      <Button title="Go back" onPress={() => router.push("/E1/HomeScreen")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default DetailScreen;
