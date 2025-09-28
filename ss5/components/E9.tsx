import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TrafficLight from "./TrafficLight";

const E9 = () => {
  return (
    <View>
      <Text style={style.title}>Bài 9:</Text>
      <TrafficLight />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default E9;
