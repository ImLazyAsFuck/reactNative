import E8 from "@/components/E8";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function E8Tab() {
  return (
    <SafeAreaView style={styles.container}>
      <E8 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
