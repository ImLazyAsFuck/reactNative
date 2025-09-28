import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorPicker from "./ColorPicker";

const E10 = () => {
  return (
    <View>
      <Text style={style.title}>Bài 10:</Text>
      <ColorPicker />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default E10;
