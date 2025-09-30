import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "./E6ThemeContext";

export const E6NestedComponent1: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.nestedContainer,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <Text style={[styles.nestedTitle, { color: colors.text }]}>
        Nested Component Level 1
      </Text>
      <E6NestedComponent2 />
    </View>
  );
};

export const E6NestedComponent2: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.nestedContainer,
        { backgroundColor: colors.background, borderColor: colors.border },
      ]}
    >
      <Text style={[styles.nestedTitle, { color: colors.text }]}>
        Nested Component Level 2
      </Text>
      <E6NestedComponent3 />
    </View>
  );
};

export const E6NestedComponent3: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.nestedContainer,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <Text style={[styles.nestedTitle, { color: colors.text }]}>
        Nested Component Level 3 (Deepest)
      </Text>
      <Text style={[styles.nestedDescription, { color: colors.textSecondary }]}>
        This component is nested 3 levels deep and still receives theme context!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nestedContainer: {
    padding: 15,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  nestedTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  nestedDescription: {
    fontSize: 12,
    fontStyle: "italic",
  },
});
