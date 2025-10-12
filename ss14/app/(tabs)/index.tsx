import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("ACCESS_TOKEN");
      if (token) {
        return;
      } else {
        router.replace("/login");
      }
    };
    checkToken();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang chủ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
