import React from "react";
import { StyleSheet, View } from "react-native";
import E3 from "@/components/E3";

const E3Screen = () => {
  return (
    <View style={styles.container}>
      <E3 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default E3Screen;