import { fetchUserProfile, logout, updateProfile } from "@/apis/account.api";
import { UserRequest, UserResponse } from "@/interfaces/account.interface";
import { SingleResponse } from "@/utils/response-data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Alert } from "react-native";

export const useFetchUserProfile = () => {
  return useQuery<SingleResponse<UserResponse>>({
    queryKey: ["user-profile"],
    queryFn: fetchUserProfile,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation<SingleResponse<UserResponse>, Error, UserRequest>({
    mutationFn: (newProfile) => updateProfile(newProfile),
    onSuccess: (data) => {
      Alert.alert("Thành công", "Cập nhật hồ sơ thành công!");
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    },
    onError: (error: any) => {
      Alert.alert("Lỗi", error?.message || "Không thể cập nhật hồ sơ");
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation<SingleResponse<null>, Error>({
    mutationFn: logout,
    onSuccess: () => {
      AsyncStorage.multiRemove(["ACCESS_TOKEN", "REFRESH_TOKEN", "USER"]);
      Alert.alert("Đăng xuất", "Bạn đã đăng xuất khỏi thiết bị này!");
      queryClient.clear();
    },
    onError: (error: any) => {
      Alert.alert("Lỗi", error?.message || "Không thể đăng xuất");
    },
  });
};
