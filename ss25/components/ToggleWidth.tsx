import React, { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export default function ToggleWidth() {
  const widthAnim = useRef(new Animated.Value(100)).current;
  const [expanded, setExpanded] = useState(false);

  const toggleWidth = () => {
    Animated.timing(widthAnim, {
      toValue: expanded ? 100 : 250,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => setExpanded(!expanded));
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={toggleWidth}>
        <Animated.View style={[styles.bar, { width: widthAnim }]}>
          <Text style={styles.text}>Toggle Width</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
  },
  bar: {
    height: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
