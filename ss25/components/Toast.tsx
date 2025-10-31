import React, { useRef } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

export default function Toast() {
  const translateY = useRef(new Animated.Value(-100)).current;

  const showToast = () => {
    Animated.sequence([
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(translateY, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Button title="Show Toast" onPress={showToast} />

      <Animated.View
        style={[
          styles.toast,
          {
            transform: [{ translateY }],
          },
        ]}
      >
        <Text style={styles.toastText}>Hello! This is a Toast message</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  toast: {
    position: "absolute",
    top: 0,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#333",
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  toastText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
