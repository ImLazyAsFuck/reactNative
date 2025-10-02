import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  BORDER_RADIUS,
  COLORS,
  Contact,
  SPACING,
} from "../../constants/shared";

interface ContactItemProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (id: string) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  onEdit,
  onDelete,
}) => {
  const handleDelete = () => {
    Alert.alert("Xóa liên hệ", `Bạn có chắc chắn muốn xóa ${contact.name}?`, [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        style: "destructive",
        onPress: () => onDelete(contact.id!),
      },
    ]);
  };

  return (
    <View style={styles.contactContainer}>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <Text style={styles.contactPhone}>{contact.phone}</Text>
        {contact.email ? (
          <Text style={styles.contactEmail}>{contact.email}</Text>
        ) : null}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => onEdit(contact)}
        >
          <Text style={styles.editButtonText}>✎</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>×</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    marginHorizontal: SPACING.md,
    marginVertical: SPACING.xs,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.dark,
    marginBottom: SPACING.xs,
  },
  contactPhone: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: SPACING.xs / 2,
  },
  contactEmail: {
    fontSize: 14,
    color: COLORS.gray,
    fontStyle: "italic",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: SPACING.sm,
  },
  editButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.warning,
    justifyContent: "center",
    alignItems: "center",
  },
  editButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.danger,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ContactItem;
