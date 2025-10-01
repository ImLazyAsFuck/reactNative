import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const E5 = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");

  const handleAddTask = async () => {
    if (input.trim() === "") {
      return Alert.alert("Error", "Please enter a task");
    }
    const newTask: Task = {
      id: Math.ceil(Math.random() * 1000000),
      title: input,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setInput("");
  };

  const handleRemoveTask = async (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks || "[]");
        setTasks(parsedTasks);
      }
    };
    loadTasks();
  }, [tasks]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Thêm mới"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity
          style={[styles.taskButton, { backgroundColor: "#04f" }]}
          onPress={() => handleAddTask()}
        >
          <Text style={styles.taskButtonText}>Thêm</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.title}</Text>
            <TouchableOpacity
              style={[styles.taskButton, { backgroundColor: "#f00" }]}
              onPress={() => handleRemoveTask(item.id)}
            >
              <Text style={styles.taskButtonText}>Xoá</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  taskContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#888",
  },
  taskText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  taskButton: {
    color: "white",
    borderRadius: 10,
  },
  taskButtonText: {
    color: "white",
    padding: 10,
  },
  list: {
    marginTop: 10,
    flex: 1,
    width: "100%",
    gap: 10,
  },
});

export default E5;
