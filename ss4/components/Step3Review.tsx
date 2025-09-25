import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StepProps } from "./types";

const Step3Review = ({ formData }: StepProps) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Bước 3: Xem lại và Xác nhận</Text>

      <View style={styles.reviewContainer}>
        <Text style={styles.reviewSectionTitle}>Thông tin cá nhân:</Text>
        <View style={styles.reviewItem}>
          <Text style={styles.reviewLabel}>Tên:</Text>
          <Text style={styles.reviewValue}>{formData.name || "Chưa nhập"}</Text>
        </View>
        <View style={styles.reviewItem}>
          <Text style={styles.reviewLabel}>Tuổi:</Text>
          <Text style={styles.reviewValue}>{formData.age || "Chưa nhập"}</Text>
        </View>

        <Text style={styles.reviewSectionTitle}>Thông tin liên hệ:</Text>
        <View style={styles.reviewItem}>
          <Text style={styles.reviewLabel}>Số điện thoại:</Text>
          <Text style={styles.reviewValue}>
            {formData.phone || "Chưa nhập"}
          </Text>
        </View>
        <View style={styles.reviewItem}>
          <Text style={styles.reviewLabel}>Địa chỉ:</Text>
          <Text style={styles.reviewValue}>
            {formData.address || "Chưa nhập"}
          </Text>
        </View>
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
  reviewContainer: {
    gap: 16,
  },
  reviewSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 8,
    marginTop: 8,
  },
  reviewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  reviewLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  reviewValue: {
    fontSize: 16,
    color: "#666",
    flex: 2,
    textAlign: "right",
  },
});

export default Step3Review;
