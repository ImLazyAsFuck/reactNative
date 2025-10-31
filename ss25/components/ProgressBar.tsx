import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

export default function ProgressBar() {
  const progress = useRef(new Animated.Value(0)).current;

  const startProgress = () => {
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: widthInterpolated,
            },
          ]}
        />
      </View>
      <Button title="Start Progress" onPress={startProgress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 10,
  },
  barContainer: {
    width: "90%",
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "green",
    borderRadius: 10,
  },
});
