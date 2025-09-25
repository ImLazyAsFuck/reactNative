import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

interface Task {
  id: number;
  name: string;
}

const E6 = () => {
  const [task, setTask] = useState<Task[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  const handleAddTask = () => {
    if (inputTask.trim() !== "") {
      setTask([...task, { id: task.length + 1, name: inputTask }]);
      setInputTask("");
      Alert.alert("Thêm công việc thành công");
      return;
    }
    Alert.alert("Vui lòng nhập công việc");
  };

  const handleDeleteTask = (id: number) => {
    setTask(task.filter((task) => task.id !== id));
    Alert.alert("Xóa công việc thành công");
  };
  return (
    <View>
      <Text style={styles.title}>Bài 6:</Text>
      <View style={styles.container}>
        <View style={styles.inputTask}>
          <TextInput
            style={styles.inputTask}
            placeholder="Nhập công việc"
            value={inputTask}
            onChangeText={(text) => setInputTask(text)}
          />
          <Button title="Thêm" onPress={() => handleAddTask()} />
        </View>
        <View style={styles.taskContainer}>
          {task.map((task) => (
            <View style={styles.taskItem} key={task.id}>
              <Text>{task.name}</Text>
              <Button title="Xóa" onPress={() => handleDeleteTask(task.id)} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  inputTask: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    flexDirection: "column",
    gap: 10,
  },
  taskContainer: {
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
});

export default E6;
