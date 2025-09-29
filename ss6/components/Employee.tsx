import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Employee = ({ fullName }: { fullName: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{fullName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Employee;
