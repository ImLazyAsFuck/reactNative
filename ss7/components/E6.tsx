import React from "react";
import { StyleSheet, View } from "react-native";
import { E6Content } from "./E6Content";
import { E6Header } from "./E6Header";
import { ThemeProvider, useTheme } from "./E6ThemeContext";

const E6: React.FC = () => {
  return (
    <ThemeProvider>
      <E6AppContent />
    </ThemeProvider>
  );
};

const E6AppContent: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <E6Header />
      <E6Content />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default E6;
