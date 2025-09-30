import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { E6Card } from "./E6Card";
import { E6NestedComponent1 } from "./E6NestedComponents";
import { useTheme } from "./E6ThemeContext";

export const E6Content: React.FC = () => {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[styles.content, { backgroundColor: colors.background }]}
    >
      <E6Card
        title="Welcome to Theme Switching!"
        content="This app demonstrates how to use React Context for theme management. Toggle the switch above to see the magic!"
      />

      <E6Card
        title="Context Benefits"
        content="Using Context eliminates prop drilling and allows any component in the tree to access theme data directly."
      />

      <E6NestedComponent1 />

      <E6Card
        title="Responsive Design"
        content="The theme automatically updates all components without manual prop passing or state management complexity."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
  },
});
