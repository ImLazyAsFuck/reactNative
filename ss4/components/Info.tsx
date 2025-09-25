import React from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

interface InfoProps {
  email: string;
  password: string;
  visible: boolean;
  onClose: () => void;
}

const Info = ({ email, password, visible, onClose }: InfoProps) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Thông tin đăng nhập</Text>
          <Text style={styles.infoText}>Email: {email}</Text>
          <Text style={styles.infoText}>Password: {password}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Đóng" onPress={onClose} color="#007AFF" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 15,
    minWidth: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
  },
});

export default Info;
