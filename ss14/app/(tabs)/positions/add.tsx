import { axiosInstance } from "@/utils/axios-instance";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Add() {
  const [position, setPosition] = useState({
    positionName: "",
    description: "",
    positionStatus: "ACTIVE",
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!position.positionName.trim()) {
      Alert.alert("Lỗi", "Tên vị trí không được để trống.");
      return false;
    }
    return true;
  };

  const addPosition = async () => {
    try {
      setLoading(true);
      const resp = await axiosInstance.post("/positions", position);
      console.log("Position added:", resp.data);
      Alert.alert("Thành công", "Thêm vị trí thành công!", [
        { text: "OK", onPress: () => router.push("/positions") },
      ]);
    } catch (error: any) {
      console.error("Failed to add position:", error);
      Alert.alert(
        "Thất bại",
        error.response?.data?.message || "Không thể thêm vị trí."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAddPosition = () => {
    if (validateForm()) addPosition();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thêm vị trí mới</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tên vị trí</Text>
        <TextInput
          value={position.positionName}
          onChangeText={(text) =>
            setPosition({ ...position, positionName: text })
          }
          style={styles.input}
          placeholder="VD: Frontend Developer"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mô tả</Text>
        <TextInput
          value={position.description}
          onChangeText={(text) =>
            setPosition({ ...position, description: text })
          }
          style={[styles.input, { height: 100 }]}
          placeholder="Mô tả công việc"
          multiline
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Trạng thái</Text>
        <Picker
          style={styles.input}
          selectedValue={position.positionStatus}
          onValueChange={(value) =>
            setPosition({ ...position, positionStatus: value })
          }
        >
          <Picker.Item label="Hoạt động" value="ACTIVE" />
          <Picker.Item label="Ngưng hoạt động" value="INACTIVE" />
        </Picker>
      </View>

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.5 }]}
        disabled={loading}
        onPress={handleAddPosition}
      >
        <Text style={styles.buttonText}>
          {loading ? "Đang thêm..." : "Thêm vị trí"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  label: { fontWeight: "600", marginBottom: 5 },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  inputContainer: { marginBottom: 15 },
  button: {
    backgroundColor: "#00a6ff",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
