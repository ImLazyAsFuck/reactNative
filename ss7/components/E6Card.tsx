import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "./E6ThemeContext";

interface E6CardProps {
  title: string;
  content: string;
}

export const E6Card: React.FC<E6CardProps> = ({ title, content }) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <Text style={[styles.cardTitle, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.cardContent, { color: colors.textSecondary }]}>
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    lineHeight: 20,
  },
});
