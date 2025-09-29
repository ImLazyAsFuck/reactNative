import E56 from "@/components/E56";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function E56Tab() {
  return (
    <SafeAreaView style={styles.container}>
      <E56 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
