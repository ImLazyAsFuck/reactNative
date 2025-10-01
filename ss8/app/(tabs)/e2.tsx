import React from "react";
import { StyleSheet, View } from "react-native";
import E2 from "@/components/E2";

const E2Screen = () => {
  return (
    <View style={styles.container}>
      <E2 />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default E2Screen;
