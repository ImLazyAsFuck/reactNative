import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";

export default function Like() {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressHeart = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.3,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Pressable onPress={handlePressHeart}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Ionicons name="heart" size={50} color="red" />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
