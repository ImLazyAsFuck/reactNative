import { Colors } from "@/constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface UserDataV1 {
  name: string;
}

interface UserDataV2 {
  user: {
    firstName: string;
    lastName: string;
  };
  version: number;
}

type UserData = UserDataV1 | UserDataV2;

interface MigrationStatus {
  isCompleted: boolean;
  fromVersion: number;
  toVersion: number;
  migratedAt: string;
}

const E8 = () => {
  const [userData, setUserData] = useState<UserDataV2 | null>(null);
  const [migrationStatus, setMigrationStatus] =
    useState<MigrationStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [migrationLog, setMigrationLog] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setMigrationLog((prev) => [...prev, `[${timestamp}] ${message}`]);
  };

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      addLog("Khởi tạo ứng dụng...");

      const migrationStatus = await checkMigrationStatus();

      if (migrationStatus?.isCompleted) {
        addLog(
          `Migration đã hoàn thành từ v${migrationStatus.fromVersion} sang v${migrationStatus.toVersion}`
        );
        await loadUserData();
      } else {
        addLog("Kiểm tra dữ liệu cần migration...");
        await performMigration();
      }
    } catch (error) {
      console.error("Error initializing app:", error);
      addLog(`Lỗi khởi tạo: ${error}`);
      Alert.alert("Lỗi", "Không thể khởi tạo ứng dụng");
    } finally {
      setIsLoading(false);
    }
  };

  const checkMigrationStatus = async (): Promise<MigrationStatus | null> => {
    try {
      const status = await AsyncStorage.getItem("migration_status");
      return status ? JSON.parse(status) : null;
    } catch (error) {
      console.error("Error checking migration status:", error);
      return null;
    }
  };

  const detectDataVersion = async (): Promise<number> => {
    try {
      const version = await AsyncStorage.getItem("data_version");
      if (version) {
        return parseInt(version);
      }

      const userData = await AsyncStorage.getItem("user_data");
      if (userData) {
        const parsed = JSON.parse(userData);

        if (parsed.version && parsed.user) {
          return 2;
        }

        if (parsed.name && !parsed.user) {
          return 1;
        }
      }

      return 0;
    } catch (error) {
      console.error("Error detecting data version:", error);
      return 0;
    }
  };

  const migrateFromV1ToV2 = async (v1Data: UserDataV1): Promise<UserDataV2> => {
    addLog("Bắt đầu migration từ v1 sang v2...");

    const nameParts = v1Data.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    addLog(`Tách tên: "${v1Data.name}" -> "${firstName}" + "${lastName}"`);

    const v2Data: UserDataV2 = {
      user: {
        firstName,
        lastName,
      },
      version: 2,
    };

    return v2Data;
  };

  const performMigration = async () => {
    try {
      const currentVersion = await detectDataVersion();
      addLog(`Phát hiện dữ liệu phiên bản: ${currentVersion}`);

      if (currentVersion === 0) {
        addLog("Không có dữ liệu cần migration");
        return;
      }

      if (currentVersion === 2) {
        addLog("Dữ liệu đã ở phiên bản mới nhất");
        await loadUserData();
        return;
      }

      if (currentVersion === 1) {
        addLog("Bắt đầu migration từ v1 sang v2...");

        const v1DataString = await AsyncStorage.getItem("user_data");
        if (!v1DataString) {
          addLog("Không tìm thấy dữ liệu v1");
          return;
        }

        const v1Data: UserDataV1 = JSON.parse(v1DataString);
        addLog(`Đọc dữ liệu v1: ${JSON.stringify(v1Data)}`);

        const v2Data = await migrateFromV1ToV2(v1Data);
        addLog(`Dữ liệu v2: ${JSON.stringify(v2Data)}`);

        await AsyncStorage.setItem("user_data", JSON.stringify(v2Data));
        addLog("Đã lưu dữ liệu v2");

        await AsyncStorage.setItem("data_version", "2");
        addLog("Đã cập nhật data_version = 2");

        const migrationStatus: MigrationStatus = {
          isCompleted: true,
          fromVersion: 1,
          toVersion: 2,
          migratedAt: new Date().toISOString(),
        };
        await AsyncStorage.setItem(
          "migration_status",
          JSON.stringify(migrationStatus)
        );
        addLog("Đã lưu migration status");

        setMigrationStatus(migrationStatus);
        setUserData(v2Data);
        addLog("Migration hoàn thành thành công!");
      }
    } catch (error) {
      console.error("Error during migration:", error);
      addLog(`Lỗi migration: ${error}`);
      Alert.alert("Lỗi Migration", "Không thể migration dữ liệu");
    }
  };

  const loadUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("user_data");
      if (userDataString) {
        const data = JSON.parse(userDataString);
        setUserData(data);
        addLog("Đã tải dữ liệu người dùng");
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      addLog(`Lỗi tải dữ liệu: ${error}`);
    }
  };

  const simulateV1Data = async () => {
    try {
      addLog("Tạo dữ liệu v1 mẫu...");
      const v1Data: UserDataV1 = { name: "Nguyễn Văn An" };
      await AsyncStorage.setItem("user_data", JSON.stringify(v1Data));
      await AsyncStorage.removeItem("data_version");
      await AsyncStorage.removeItem("migration_status");
      addLog("Đã tạo dữ liệu v1 mẫu");
      Alert.alert(
        "Thành công",
        "Đã tạo dữ liệu v1 mẫu. Reload app để test migration!"
      );
    } catch (error) {
      console.error("Error creating v1 data:", error);
      addLog(`Lỗi tạo dữ liệu v1: ${error}`);
    }
  };

  const resetData = async () => {
    try {
      await AsyncStorage.multiRemove([
        "user_data",
        "data_version",
        "migration_status",
      ]);
      setUserData(null);
      setMigrationStatus(null);
      setMigrationLog([]);
      addLog("Đã reset tất cả dữ liệu");
      Alert.alert("Thành công", "Đã reset tất cả dữ liệu");
    } catch (error) {
      console.error("Error resetting data:", error);
      addLog(`Lỗi reset: ${error}`);
    }
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
            Đang khởi tạo...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: currentColors.background }]}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: currentColors.text }]}>
            Data Migration System
          </Text>
          <Text style={[styles.subtitle, { color: currentColors.icon }]}>
            Hệ thống migration dữ liệu v1 → v2
          </Text>
        </View>

        {migrationStatus && (
          <View
            style={[
              styles.statusCard,
              { backgroundColor: currentColors.background },
            ]}
          >
            <Text style={[styles.statusTitle, { color: currentColors.text }]}>
              Migration Status
            </Text>
            <Text style={[styles.statusText, { color: currentColors.text }]}>
              Hoàn thành: v{migrationStatus.fromVersion} → v
              {migrationStatus.toVersion}
            </Text>
            <Text style={[styles.statusText, { color: currentColors.icon }]}>
              Thời gian: {new Date(migrationStatus.migratedAt).toLocaleString()}
            </Text>
          </View>
        )}

        {userData && (
          <View
            style={[
              styles.dataCard,
              { backgroundColor: currentColors.background },
            ]}
          >
            <Text style={[styles.dataTitle, { color: currentColors.text }]}>
              Dữ liệu người dùng (v{userData.version})
            </Text>
            <Text style={[styles.dataText, { color: currentColors.text }]}>
              Họ tên: {userData.user.firstName} {userData.user.lastName}
            </Text>
            <Text style={[styles.dataText, { color: currentColors.icon }]}>
              Phiên bản: {userData.version}
            </Text>
          </View>
        )}

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#007AFF" }]}
            onPress={simulateV1Data}
          >
            <Text style={styles.buttonText}>Tạo dữ liệu v1 mẫu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FF9500" }]}
            onPress={initializeApp}
          >
            <Text style={styles.buttonText}>Chạy migration</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FF4444" }]}
            onPress={resetData}
          >
            <Text style={styles.buttonText}>Reset dữ liệu</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logSection}>
          <Text style={[styles.logTitle, { color: currentColors.text }]}>
            Migration Log
          </Text>
          <View style={[styles.logContainer, { backgroundColor: "#f5f5f5" }]}>
            {migrationLog.map((log, index) => (
              <Text key={index} style={styles.logText}>
                {log}
              </Text>
            ))}
          </View>
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
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
  statusCard: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginBottom: 20,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  statusText: {
    fontSize: 14,
    marginBottom: 5,
  },
  dataCard: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginBottom: 20,
  },
  dataTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  dataText: {
    fontSize: 14,
    marginBottom: 5,
  },
  actions: {
    marginBottom: 30,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  logSection: {
    marginBottom: 30,
  },
  logTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  logContainer: {
    padding: 15,
    borderRadius: 10,
    maxHeight: 300,
  },
  logText: {
    fontSize: 12,
    fontFamily: "monospace",
    marginBottom: 2,
    color: "#333",
  },
});

export default E8;
