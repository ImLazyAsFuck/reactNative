import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BORDER_RADIUS, COLORS, SPACING } from "../../constants/shared";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
      <Text style={styles.closeButtonText}>✕</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    borderTopLeftRadius: BORDER_RADIUS.lg,
    borderTopRightRadius: BORDER_RADIUS.lg,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.dark,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 18,
    color: COLORS.gray,
    fontWeight: "500",
  },
});

export default ModalHeader;
