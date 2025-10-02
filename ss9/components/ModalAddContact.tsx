import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BORDER_RADIUS, COLORS, Contact, SPACING } from "../constants/shared";
import FormInput from "./ui/FormInput";
import ModalHeader from "./ui/ModalHeader";

interface ModalAddContactProps {
  visible: boolean;
  onClose: () => void;
  onAddContact: (contact: Contact) => void;
}

const ModalAddContact: React.FC<ModalAddContactProps> = ({
  visible,
  onClose,
  onAddContact,
}) => {
  const [formData, setFormData] = useState<Contact>({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<Contact>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Contact> = {};

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.replace(/\s/g, "");
    const trimmedEmail = formData.email?.trim() || "";

    if (!trimmedName) {
      newErrors.name = "Tên không được để trống";
    }

    if (!trimmedPhone) {
      newErrors.phone = "Số điện thoại không được để trống";
    } else if (!/^\d{10,11}$/.test(trimmedPhone)) {
      newErrors.phone = "Số điện thoại không hợp lệ (10-11 số)";
    }

    if (!trimmedEmail) {
      newErrors.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      newErrors.email = "Email không hợp lệ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddContact = () => {
    if (validateForm()) {
      onAddContact(formData);
      handleClose();
    }
  };

  const handleClose = () => {
    setFormData({ name: "", phone: "", email: "" });
    setErrors({});
    onClose();
  };

  const updateFormData = (field: keyof Contact) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ModalHeader title="Thêm danh bạ" onClose={handleClose} />

          <View style={styles.content}>
            <View style={styles.inputContainer}>
              <FormInput
                placeholder="Tên *"
                value={formData.name}
                onChangeText={updateFormData("name")}
              />
              {errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <FormInput
                placeholder="Số điện thoại *"
                value={formData.phone}
                onChangeText={updateFormData("phone")}
                keyboardType="phone-pad"
              />
              {errors.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <FormInput
                placeholder="Email"
                value={formData.email}
                onChangeText={updateFormData("email")}
                keyboardType="email-address"
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleClose}
              >
                <Text style={styles.cancelButtonText}>Hủy</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddContact}
              >
                <Text style={styles.addButtonText}>Thêm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.overlay,
  },
  container: {
    width: "85%",
    maxWidth: 400,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  content: {
    padding: SPACING.lg,
  },
  inputContainer: {
    marginBottom: SPACING.md,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: SPACING.xs,
    marginLeft: SPACING.xs,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SPACING.md,
    gap: SPACING.md,
  },
  cancelButton: {
    flex: 1,
    height: 48,
    backgroundColor: COLORS.lightGray,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.gray,
  },
  addButton: {
    flex: 1,
    height: 48,
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.white,
  },
});

export default ModalAddContact;
