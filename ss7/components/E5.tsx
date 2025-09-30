import React, { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Task {
  id: string;
  title: string;
}

const E5 = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { id: Date.now().toString(), title: taskInput }]);
    setTaskInput("");
  };

  const handleDeleteTask = (id: string) => {
    Alert.alert("Xóa công việc", "Bạn có chắc chắn muốn xóa công việc này?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        onPress: () => setTasks(tasks.filter((task) => task.id !== id)),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập công việc mới"
          value={taskInput}
          onChangeText={setTaskInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Thêm</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          style={styles.list}
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Text>{item.title}</Text>
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => handleDeleteTask(item.id)}
              >
                <Text style={styles.buttonText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#04f",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
  },
  listContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  taskContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    gap: 20,
    marginTop: 20,
  },
  buttonDelete: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    width: 60,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});

export default E5;
