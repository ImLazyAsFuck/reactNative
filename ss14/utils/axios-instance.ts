import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export const axiosInstance = axios.create({
  baseURL: "https://nest-api-public.ixe-agent.io.vn/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("ACCESS_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.warn("⚠️ Token hết hạn — tự động đăng xuất");
      await AsyncStorage.removeItem("ACCESS_TOKEN");
      await AsyncStorage.removeItem("USER");
      router.replace("/login");
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
