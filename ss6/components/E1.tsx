import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Employee from "./Employee";

interface Employee {
  id: number;
  fullName: string;
}

const E1 = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, fullName: "John Doe" },
    { id: 2, fullName: "Jane Doe" },
    { id: 3, fullName: "Jim Doe" },
    { id: 4, fullName: "Jill Doe" },
    { id: 5, fullName: "Jack Doe" },
    { id: 6, fullName: "Jill Doe" },
    { id: 7, fullName: "Jack Doe" },
  ]);
  return (
    <View>
      <Text>List employee</Text>
      <FlatList
        data={employees}
        renderItem={({ item }) => <Employee fullName={item.fullName} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default E1;
