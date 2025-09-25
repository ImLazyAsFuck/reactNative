import { Lightbulb, LightbulbOff } from "lucide-react-native";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const E3 = () => {
  const [isLight, setIsLight] = useState(false);
  return (
    <View>
      <Text style={styles.title}>Bài 3:</Text>
      <View style={[styles.container, isLight ? styles.light : styles.dark]}>
        {isLight ? (
          <Lightbulb color={"orange"} size={100} />
        ) : (
          <LightbulbOff color={"#888"} size={100} />
        )}
        <Button
          onPress={() => setIsLight(!isLight)}
          title={isLight ? "Tắt đèn" : "Bật đèn"}
          color={isLight ? "orange" : "#888"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 20,
    borderRadius: 15,
    minHeight: 200,
    transitionDuration: "0.3s",
    transitionProperty: "all",
    transitionTimingFunction: "ease",
  },
  light: {
    backgroundColor: "#ffff99",
    shadowColor: "#ff8c00",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 15,
  },
  dark: {
    backgroundColor: "#2c2c2c",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
});

export default E3;
