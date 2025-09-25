import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { StepProps } from "./types";

const Step2ContactInfo = ({ formData, onUpdateData }: StepProps) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Bước 2: Thông tin liên hệ</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Số điện thoại:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập số điện thoại"
          value={formData.phone}
          onChangeText={(value) => onUpdateData("phone", value)}
          keyboardType="phone-pad"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Địa chỉ:</Text>
        <TextInput
          style={[styles.textInput, styles.textArea]}
          placeholder="Nhập địa chỉ"
          value={formData.address}
          onChangeText={(value) => onUpdateData("address", value)}
          multiline
          numberOfLines={3}
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
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
});

export default Step2ContactInfo;
