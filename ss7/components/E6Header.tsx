import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { useTheme } from "./E6ThemeContext";

export const E6Header: React.FC = () => {
  const { colors, theme, toggleTheme } = useTheme();

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.surface, borderBottomColor: colors.border },
      ]}
    >
      <Text style={[styles.headerTitle, { color: colors.text }]}>
        Theme Switcher App
      </Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, { color: colors.textSecondary }]}>
          {theme === "light" ? "☀️ Light" : "🌙 Dark"}
        </Text>
        <Switch
          value={theme === "dark"}
          onValueChange={toggleTheme}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor={colors.background}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  switchLabel: {
    fontSize: 16,
  },
});
