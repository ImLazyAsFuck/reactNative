import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { StepProps } from "./types";

const Step1PersonalInfo = ({ formData, onUpdateData }: StepProps) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Bước 1: Thông tin cá nhân</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tên:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập họ và tên"
          value={formData.name}
          onChangeText={(value) => onUpdateData("name", value)}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tuổi:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập tuổi"
          value={formData.age}
          onChangeText={(value) => onUpdateData("age", value)}
          keyboardType="numeric"
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
    color: "#333",
  },
});

export default Step1PersonalInfo;
