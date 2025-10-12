import { Position } from "@/interfaces/position.interface";
import { axiosInstance } from "@/utils/axios-instance";
import { SingleResponse } from "@/utils/response-data";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function PositionDetail() {
  const [position, setPosition] = useState<Position | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useLocalSearchParams();

  const getDetail = async (id: string | number) => {
    try {
      const resp = await axiosInstance.get<SingleResponse<Position>>(
        `/positions/${id}`
      );
      setPosition(resp.data.data);
    } catch (error) {
      console.error("Failed to fetch position detail:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      if (id) {
        const validId = Array.isArray(id) ? id[0] : id;
        getDetail(validId);
      }
    };
    load();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  if (!position) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.notFound}>Không tìm thấy vị trí này.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{position.positionName}</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Mô tả</Text>
          <Text style={styles.value}>
            {position.description || "Không có mô tả"}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Trạng thái</Text>
          <Text
            style={[
              styles.status,
              position.positionStatus === "ACTIVE"
                ? styles.active
                : styles.inactive,
            ]}
          >
            {position.positionStatus === "ACTIVE"
              ? "Đang hoạt động"
              : "Ngừng hoạt động"}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Số nhân viên</Text>
          <Text style={styles.value}>{position.employeeCount}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Ngày tạo</Text>
          <Text style={styles.value}>
            {new Date(position.createdAt).toLocaleDateString("vi-VN")}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Trạng thái xoá</Text>
          <Text style={styles.value}>
            {position.isDelete ? "Đã xoá" : "Hoạt động bình thường"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f9fafb",
    alignItems: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    marginBottom: 14,
  },
  label: {
    fontSize: 15,
    color: "#555",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#111",
    fontWeight: "500",
  },
  status: {
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  active: {
    color: "#0a7b25",
    backgroundColor: "#e8f9ee",
  },
  inactive: {
    color: "#b30000",
    backgroundColor: "#fdeaea",
  },
  notFound: {
    fontSize: 18,
    color: "red",
    fontWeight: "500",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loadingText: {
    marginTop: 8,
    fontSize: 15,
    color: "#666",
  },
});
