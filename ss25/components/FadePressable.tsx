import React, { useRef } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";

export default function FadePressable() {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
      friction: 5,
      tension: 150,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 5,
      tension: 150,
    }).start();
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ scale }],
          },
        ]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#4CAF50",
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 100,
  },
});
