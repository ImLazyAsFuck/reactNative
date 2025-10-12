import { getPositionById, updatePosition } from "@/apis/position.apis";
import { Position } from "@/interfaces/position.interface";
import { Picker } from "@react-native-picker/picker";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function EditPosition() {
  const { id } = useLocalSearchParams();
  const [position, setPosition] = useState<Position>({
    id: 0,
    positionName: "",
    description: "",
    positionStatus: "ACTIVE",
    createdAt: "",
    employeeCount: 0,
    isDelete: false,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchPosition = async () => {
    try {
      const response = await getPositionById(Number(id));
      setPosition(response.data);
    } catch (error) {
      Alert.alert("Lỗi", "Không thể tải thông tin vị trí.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosition();
  }, [id]);

  const handleUpdate = async () => {
    if (!position.positionName.trim()) {
      Alert.alert("Lỗi", "Tên vị trí không được để trống.");
      return;
    }
    try {
      setSaving(true);
      const response = await updatePosition(Number(id), position);
      if (response.data) {
        Alert.alert("Thành công", "Cập nhật vị trí thành công!", [
          { text: "OK", onPress: () => router.push("/positions") },
        ]);
      } else {
        Alert.alert("Lỗi", response.message || "Không thể cập nhật.");
      }
    } catch (error) {
      Alert.alert("Lỗi", "Cập nhật thất bại.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên vị trí</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên vị trí"
        value={position.positionName}
        onChangeText={(text) =>
          setPosition({ ...position, positionName: text })
        }
      />

      <Text style={styles.label}>Mô tả</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Nhập mô tả"
        multiline
        value={position.description}
        onChangeText={(text) => setPosition({ ...position, description: text })}
      />

      <Text style={styles.label}>Trạng thái</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={position.positionStatus}
          onValueChange={(value) =>
            setPosition({ ...position, positionStatus: value })
          }
        >
          <Picker.Item label="Đang hoạt động" value="ACTIVE" />
          <Picker.Item label="Ngừng hoạt động" value="INACTIVE" />
        </Picker>
      </View>

      <TouchableOpacity
        style={[styles.button, saving && { opacity: 0.7 }]}
        onPress={handleUpdate}
        disabled={saving}
      >
        <Text style={styles.buttonText}>
          {saving ? "Đang lưu..." : "Cập nhật"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: "gray",
  },
});
