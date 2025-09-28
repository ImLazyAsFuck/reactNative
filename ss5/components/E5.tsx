import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./LoginForm";

const E5 = () => {
  return (
    <View>
      <Text style={style.title}>Bài 5:</Text>
      <LoginForm />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
});

export default E5;
