import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BusinessCard from "./BusinessCard";

const E1 = () => {
  return (
    <View>
      <Text style={style.title}>Bài 1:</Text>
      <View style={style.container}>
        <BusinessCard />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default E1;
