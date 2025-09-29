import E7 from "@/components/E7";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function E7Tab() {
  return (
    <SafeAreaView style={styles.container}>
      <E7 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
