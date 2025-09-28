import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LikeButton from "./LikeButton";

const E4 = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handlePress = (isLiked: boolean) => {
    setIsLiked(isLiked);
  };
  return (
    <View>
      <Text style={style.title}>Bài 4:</Text>
      <View style={style.buttonContainer}>
        <LikeButton isLiked={isLiked} onPress={handlePress} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    justifyContent: "center",
  },
});

export default E4;
