import { Colors } from "@/constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SettingsState {
  username: string;
  email: string;
  notificationsEnabled: boolean;
}

const E6 = () => {
  const [settings, setSettings] = useState<SettingsState>({
    username: "Guest",
    email: "",
    notificationsEnabled: true,
  });

  const [tempSettings, setTempSettings] = useState<SettingsState>({
    username: "Guest",
    email: "",
    notificationsEnabled: true,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedSettings = await AsyncStorage.getItem("userSettings");
        if (savedSettings) {
          const parsedSettings = JSON.parse(savedSettings);
          setSettings(parsedSettings);
          setTempSettings(parsedSettings);
        }
      } catch (error) {
        console.error("Error loading settings:", error);
        Alert.alert("Lỗi", "Không thể tải cài đặt");
      } finally {
        setIsLoading(false);
      }
    };
    loadSettings();
  }, []);

  const saveSettings = async (newSettings: SettingsState) => {
    try {
      await AsyncStorage.mergeItem("userSettings", JSON.stringify(newSettings));
      setSettings(newSettings);
    } catch (error) {
      console.error("Error saving settings:", error);
      Alert.alert("Lỗi", "Không thể lưu cài đặt");
    }
  };

  const updateTempSetting = (
    key: keyof SettingsState,
    value: string | boolean
  ) => {
    const newTempSettings = { ...tempSettings, [key]: value };
    setTempSettings(newTempSettings);
  };

  const saveAllSettings = () => {
    Alert.alert(
      "Lưu cài đặt",
      "Bạn có chắc muốn lưu tất cả cài đặt hiện tại?",
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Lưu",
          style: "default",
          onPress: () => {
            saveSettings(tempSettings);
            Alert.alert("Thành công", "Cài đặt đã được lưu!");
          },
        },
      ]
    );
  };

  const currentColors = Colors.light;

  if (isLoading) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: currentColors.background },
        ]}
      >
        <View style={styles.loadingContainer}>
          <Text style={[styles.loadingText, { color: currentColors.text }]}>
            Đang tải cài đặt...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: currentColors.background }]}
    >
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={[styles.title, { color: currentColors.text }]}>
            Cài đặt
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
            Thông tin cá nhân
          </Text>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: currentColors.text }]}>
              Tên hiển thị
            </Text>
            <TextInput
              style={[
                styles.textInput,
                {
                  backgroundColor: currentColors.background,
                  borderColor: currentColors.icon,
                  color: currentColors.text,
                },
              ]}
              value={tempSettings.username}
              onChangeText={(text) => updateTempSetting("username", text)}
              placeholder="Nhập tên hiển thị"
              placeholderTextColor={currentColors.icon}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: currentColors.text }]}>
              Email
            </Text>
            <TextInput
              style={[
                styles.textInput,
                {
                  backgroundColor: currentColors.background,
                  borderColor: currentColors.icon,
                  color: currentColors.text,
                },
              ]}
              value={tempSettings.email}
              onChangeText={(text) => updateTempSetting("email", text)}
              placeholder="Nhập email"
              placeholderTextColor={currentColors.icon}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
            Thông báo
          </Text>

          <View style={styles.switchGroup}>
            <View style={styles.switchInfo}>
              <Text style={[styles.switchLabel, { color: currentColors.text }]}>
                Nhận thông báo
              </Text>
              <Text
                style={[
                  styles.switchDescription,
                  { color: currentColors.icon },
                ]}
              >
                Cho phép ứng dụng gửi thông báo đến bạn
              </Text>
            </View>
            <Switch
              value={tempSettings.notificationsEnabled}
              onValueChange={(value) =>
                updateTempSetting("notificationsEnabled", value)
              }
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={
                tempSettings.notificationsEnabled ? "#f5dd4b" : "#f4f3f4"
              }
            />
          </View>
        </View>

        <View style={styles.section}>
          <TouchableOpacity
            style={[styles.saveButton, { backgroundColor: "#007AFF" }]}
            onPress={saveAllSettings}
          >
            <Text style={styles.saveButtonText}>Lưu cài đặt</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: currentColors.icon }]}>
            Nhấn "Lưu cài đặt" để lưu thay đổi
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "500",
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },
  switchGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  switchInfo: {
    flex: 1,
    marginRight: 15,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  switchDescription: {
    fontSize: 14,
  },
  saveButton: {
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default E6;
