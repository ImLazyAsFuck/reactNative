import { createPosition } from "@/apis/position.apis";
import PositionForm from "@/components/PositionForm";
import { PositionRequest } from "@/interfaces/position.interface";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Alert } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddPositionScreen() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: Omit<PositionRequest, "id">) => createPosition(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["positions"] });
      Alert.alert("Thành công", "Thêm vị trí mới thành công!");
      router.push("/positions");
    },
    onError: (error: any) => {
      Alert.alert("Lỗi", error?.response?.data?.message || "Không thể thêm vị trí.");
    },
  });

  const handleAddPosition = async (data: Omit<PositionRequest, "id">) => {
    await mutateAsync(data);
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <PositionForm
        onSubmit={handleAddPosition}
        submitButtonText={isPending ? "Đang thêm..." : "Thêm vị trí"}
        disabled={isPending}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
