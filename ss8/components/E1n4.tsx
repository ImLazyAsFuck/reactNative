import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const E14 = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const handleSetName = async () => {
    await AsyncStorage.setItem("name", JSON.stringify(input));
    setName(input);
  };

  const handleRemoveName = async () => {
    await AsyncStorage.removeItem("name");
    setName("");
  };

  useEffect(() => {
    const loadName = async () => {
      try {
        const savedName = await AsyncStorage.getItem("name");
        if (savedName) {
          const parsedName = JSON.parse(savedName);
          setName(parsedName);
        }
      } catch (error) {
        console.error("Error loading name:", error);
      }
    };
    loadName();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.itemInput}
          placeholder="Mời nhập tên"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={() => handleSetName()} style={styles.item}>
          <Text style={styles.itemText}>Lưu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleRemoveName()}
          style={styles.item}
        >
          <Text style={styles.itemText}>Quên</Text>
        </TouchableOpacity>
      </View>
      {name ? (
        <Text style={styles.nameText}>Chào mừng đã trở lại: {name}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  item: {
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "red",
    gap: 10,
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  itemInput: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: "50%",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default E14;
