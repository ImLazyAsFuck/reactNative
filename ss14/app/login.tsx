import { LoginRequest } from "@/interfaces/auth.interface";
import { axiosInstance } from "@/utils/axios-instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RelativePathString, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Login() {
  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    phoneNumber: "",
    password: "",
    deviceId: "16012005",
    isRemembered: false,
  });

  const validateLoginRequest = () => {
    if (loginRequest.phoneNumber === "" || loginRequest.password === "") {
      Alert.alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateLoginRequest()) return;

    try {
      const response = await axiosInstance.post("/auths/login", loginRequest);
      if (response.data.statusCode === 200) {
        const { accessToken, user } = response.data.data;

        await AsyncStorage.setItem("ACCESS_TOKEN", accessToken);
        await AsyncStorage.setItem("USER", JSON.stringify(user));

        router.push("/positions" as RelativePathString);
      } else {
        Alert.alert("Đăng nhập thất bại", response.data.message);
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      Alert.alert("Lỗi", "Không thể đăng nhập. Kiểm tra kết nối hoặc server.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={loginRequest.phoneNumber}
          onChangeText={(text) =>
            setLoginRequest({ ...loginRequest, phoneNumber: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={loginRequest.password}
          onChangeText={(text) =>
            setLoginRequest({ ...loginRequest, password: text })
          }
        />
        <View style={styles.switch}>
          <Switch
            value={loginRequest.isRemembered}
            onValueChange={(value) =>
              setLoginRequest({ ...loginRequest, isRemembered: value })
            }
          />
          <Text>Remember me</Text>
        </View>
        <Button title="Login" onPress={() => handleLogin()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 350,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  login: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    paddingBottom: 30,
    paddingHorizontal: 30,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  switch: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
