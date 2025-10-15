import { getPosition, updatePosition } from "@/apis/position.apis";
import PositionForm from "@/components/PositionForm";
import { PositionRequest } from "@/interfaces/position.interface";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

export default function EditPositionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const positionId = Number(id);
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["position", positionId],
    queryFn: () => getPosition(positionId),
    enabled: !!positionId,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (updatedData: Omit<PositionRequest, "id">) =>
      updatePosition(positionId, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["positions"] });
      queryClient.invalidateQueries({ queryKey: ["position", positionId] });
      Alert.alert("Thành công", "Cập nhật vị trí thành công!");
      router.push("/positions");
    },
    onError: (err: any) => {
      Alert.alert(
        "Lỗi",
        err?.response?.data?.message || "Không thể cập nhật vị trí"
      );
    },
  });

  const handleUpdatePosition = async (data: Omit<PositionRequest, "id">) => {
    await mutateAsync(data);
  };

  if (isLoading)
    return (
      <ActivityIndicator
        style={{ marginTop: 50 }}
        size="large"
        color="#3182CE"
      />
    );
  if (isError)
    return (
      <Text style={styles.errorText}>
        Lỗi tải dữ liệu: {(error as Error).message}
      </Text>
    );

  const position = data?.data;
  if (!position)
    return <Text style={styles.errorText}>Không tìm thấy vị trí.</Text>;

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <PositionForm
        onSubmit={handleUpdatePosition}
        initialValues={{
          positionName: position.positionName,
          description: position.description,
          positionStatus: position.positionStatus,
        }}
        submitButtonText={isPending ? "Đang cập nhật..." : "Cập nhật"}
        disabled={isPending}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  errorText: { textAlign: "center", marginTop: 50, fontSize: 18, color: "red" },
});
