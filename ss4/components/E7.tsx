import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const E7 = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (fieldName: keyof FormData, value: string): string => {
    switch (fieldName) {
      case "name":
        return value.trim() === "" ? "Vui lòng nhập họ tên." : "";
      case "email":
        if (value.trim() === "") return "Vui lòng nhập email.";
        return !validateEmail(value) ? "Email không đúng định dạng." : "";
      case "password":
        if (value === "") return "Vui lòng nhập mật khẩu.";
        return value.length < 6 ? "Mật khẩu phải có ít nhất 6 ký tự." : "";
      case "confirmPassword":
        if (value === "") return "Vui lòng xác nhận mật khẩu.";
        return value !== formData.password
          ? "Mật khẩu xác nhận không khớp."
          : "";
      default:
        return "";
    }
  };

  const handleInputChange = (fieldName: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    if (touchedFields[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({
        ...prev,
        [fieldName]: error,
      }));
    }

    if (fieldName === "password" && touchedFields.confirmPassword) {
      const confirmError =
        formData.confirmPassword !== value
          ? "Mật khẩu xác nhận không khớp."
          : "";
      setErrors((prev) => ({
        ...prev,
        confirmPassword: confirmError,
      }));
    }
  };

  const handleBlur = (fieldName: keyof FormData) => {
    setTouchedFields((prev) => ({
      ...prev,
      [fieldName]: true,
    }));

    const error = validateField(fieldName, formData[fieldName]);
    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  const isFormValid = (): boolean => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      validateEmail(formData.email) &&
      formData.password.length >= 6 &&
      formData.confirmPassword === formData.password &&
      Object.values(errors).every((error) => error === "")
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      alert(
        `Đăng ký thành công!`
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bài 7:</Text>
      <Text style={styles.title}>Tạo tài khoản</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.textInput,
            errors.name && touchedFields.name ? styles.inputError : null,
          ]}
          placeholder="Họ và tên"
          value={formData.name}
          onChangeText={(value) => handleInputChange("name", value)}
          onBlur={() => handleBlur("name")}
          placeholderTextColor="#999"
        />
        {errors.name && touchedFields.name && (
          <Text style={styles.errorText}>{errors.name}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.textInput,
            errors.email && touchedFields.email ? styles.inputError : null,
          ]}
          placeholder="Email"
          value={formData.email}
          onChangeText={(value) => handleInputChange("email", value)}
          onBlur={() => handleBlur("email")}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        {errors.email && touchedFields.email && (
          <Text style={styles.errorText}>{errors.email}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.textInput,
            errors.password && touchedFields.password
              ? styles.inputError
              : null,
          ]}
          placeholder="Mật khẩu"
          value={formData.password}
          onChangeText={(value) => handleInputChange("password", value)}
          onBlur={() => handleBlur("password")}
          secureTextEntry
          placeholderTextColor="#999"
        />
        {errors.password && touchedFields.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.textInput,
            errors.confirmPassword && touchedFields.confirmPassword
              ? styles.inputError
              : null,
          ]}
          placeholder="Xác nhận mật khẩu"
          value={formData.confirmPassword}
          onChangeText={(value) => handleInputChange("confirmPassword", value)}
          onBlur={() => handleBlur("confirmPassword")}
          secureTextEntry
          placeholderTextColor="#999"
        />
        {errors.confirmPassword && touchedFields.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.submitButton,
          !isFormValid() ? styles.submitButtonDisabled : null,
        ]}
        onPress={handleSubmit}
        disabled={!isFormValid()}
      >
        <Text
          style={[
            styles.submitButtonText,
            !isFormValid() ? styles.submitButtonTextDisabled : null,
          ]}
        >
          ĐĂNG KÝ
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: "white",
    color: "#333",
  },
  inputError: {
    borderColor: "#e74c3c",
  },
  errorText: {
    color: "#e74c3c",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 18,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  submitButtonDisabled: {
    backgroundColor: "#ccc",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  submitButtonTextDisabled: {
    color: "#999",
  },
});

export default E7;
