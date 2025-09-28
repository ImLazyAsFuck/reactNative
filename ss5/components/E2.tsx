import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BusinessCard from "./BusinessCard";

const E2 = () => {
  return (
    <View>
      <Text style={style.title}>Bài 2:</Text>
      <View style={style.container}>
        <BusinessCard
          name="John Doe"
          jobTitle="Software Engineer"
          contactInfo="+84 909090909"
          avatarUrl="https://i.pinimg.com/736x/2b/6e/2f/2b6e2fc4bfa3ac17c9f3d1a7a8889189.jpg"
        />
        <BusinessCard
          name="Agnes Tachyon"
          jobTitle="Software Engineer"
          contactInfo="+84 909090909"
          avatarUrl="https://i.pinimg.com/736x/9c/5e/1d/9c5e1d754895e2614f05d7f32ae833ba.jpg"
        />
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
    gap: 20,
  },
});

export default E2;
