import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const E6 = () => {
    const [tasks, setTasks] = useState<any[]>([]);
    const [newTask, setNewTask] = useState('');
    const [taskId, setTaskId] = useState(6);
  
    const addTask = () => {
      if (newTask.trim() === '') return;
      
      const newTaskItem = {
        id: taskId,
        text: newTask.trim(),
        completed: false,
      };
  
      setTasks([newTaskItem, ...tasks]);
      setNewTask('');
      setTaskId(taskId + 1);
    };
  
    const toggleTask = (id: number) => {
      setTasks(tasks.map((task: any) => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    };
  
    const getRandomColor = (index: number) => {
      return ['#FF5733', '#33FF57', '#3357FF'][index % 3];
    };
  
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Bài 6:</Text>
        <KeyboardAvoidingView 
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Danh sách công việc</Text>
            
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nhập công việc mới..."
                placeholderTextColor="#999"
                value={newTask}
                onChangeText={setNewTask}
                onSubmitEditing={addTask}
                returnKeyType="done"
              />
              <Pressable 
                style={[styles.addButton, !newTask.trim() && styles.addButtonDisabled]}
                onPress={addTask}
                disabled={!newTask.trim()}
              >
                <Text style={styles.addButtonText}>Thêm</Text>
              </Pressable>
            </View>
          </View>
  
          <ScrollView 
            style={styles.taskList}
            showsVerticalScrollIndicator={false}
          >
            {tasks.map((task, index) => (
              <Pressable 
                key={task.id} 
                style={[
                  styles.taskItem, 
                  { backgroundColor: getRandomColor(index) },
                  task.completed && styles.taskCompleted
                ]}
                onPress={() => toggleTask(task.id)}
              >
                <Text 
                  style={[
                    styles.taskText,
                    task.completed && styles.taskTextCompleted
                  ]}
                >
                  {task.completed ? '✓ ' : '○ '}{task.text}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    container: {
      flex: 1,
      padding: 16,
    },
    header: {
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 16,
      textAlign: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    input: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 12,
      marginRight: 8,
      fontSize: 16,
      color: '#333',
      borderWidth: 1,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    addButton: {
      backgroundColor: '#6200ee',
      borderRadius: 8,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
    },
    addButtonDisabled: {
      backgroundColor: '#b388ff',
      opacity: 0.7,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    taskList: {
      flex: 1,
    },
    taskItem: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      borderLeftWidth: 6,
      borderLeftColor: '#6200ee',
    },
    taskCompleted: {
      opacity: 0.7,
      borderLeftColor: '#4caf50',
    },
    taskText: {
      fontSize: 16,
      color: '#333',
      lineHeight: 24,
    },
    taskTextCompleted: {
      textDecorationLine: 'line-through',
      color: '#666',
    },
});

export default E6