import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title?: string;
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
