import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function AddButton() {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push("/positions/add")}
    >
      <FontAwesome
        style={{ textAlign: "center" }}
        name="plus"
        size={24}
        color="white"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#00ff2fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
