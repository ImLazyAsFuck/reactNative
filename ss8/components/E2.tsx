import { Colors } from "@/constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const E2 = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    await AsyncStorage.setItem("theme", JSON.stringify(newTheme));
    setTheme(newTheme);
  };

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme) {
          const parsedTheme = JSON.parse(savedTheme);
          setTheme(parsedTheme);
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      }
    };
    loadTheme();
  }, []);

  const currentColors = Colors[theme as keyof typeof Colors];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: currentColors.background }]}
    >
      <View style={styles.switchContainer}>
        <Text style={[styles.text, { color: currentColors.text }]}>
          Chế độ ban đêm
        </Text>
        <Switch
          value={theme === "dark"}
          onValueChange={() => handleTheme()}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={theme === "dark" ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default E2;
