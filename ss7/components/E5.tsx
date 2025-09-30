import React, { useReducer, useState } from "react";
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
  name: string;
  completed: boolean;
}

type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: string };

interface TodoState {
  todos: Task[];
}

const initialState: TodoState = {
  todos: [],
};
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.payload.trim() === "") return state;
      const newTodo: Task = {
        id: Date.now().toString(),
        name: action.payload.trim(),
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

const E5 = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    dispatch({ type: "ADD_TODO", payload: taskInput });
    setTaskInput("");
  };

  const handleToggleTask = (id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleDeleteTask = (id: string) => {
    Alert.alert("Xóa công việc", "Bạn có chắc chắn muốn xóa công việc này?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        onPress: () => dispatch({ type: "DELETE_TODO", payload: id }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
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
          data={state.todos}
          renderItem={({ item }) => (
            <View
              style={[
                styles.taskContainer,
                item.completed && styles.completedTask,
              ]}
            >
              <TouchableOpacity
                style={styles.taskContent}
                onPress={() => handleToggleTask(item.id)}
              >
                <Text
                  style={[
                    styles.taskText,
                    item.completed && styles.completedText,
                  ]}
                >
                  {item.name}
                </Text>
                <Text style={styles.statusText}>
                  {item.completed ? "✓ Hoàn thành" : "⏳ Chưa hoàn thành"}
                </Text>
              </TouchableOpacity>
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
    marginBottom: 20,
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
  completedTask: {
    backgroundColor: "#f0f8f0",
    borderColor: "#4CAF50",
  },
  taskContent: {
    flex: 1,
    marginRight: 10,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 4,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#666",
  },
  statusText: {
    fontSize: 12,
    color: "#666",
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
