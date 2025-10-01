import E1n4 from "@/components/E1n4";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const E1n4Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <E1n4 />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default E1n4Screen;
