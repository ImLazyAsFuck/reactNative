import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BORDER_RADIUS, COLORS, Contact, SPACING } from "../constants/shared";
import FormInput from "./ui/FormInput";
import ModalHeader from "./ui/ModalHeader";

interface ModalEditContactProps {
  visible: boolean;
  contact: Contact | null;
  onClose: () => void;
  onUpdateContact: (contact: Contact) => void;
}

const ModalEditContact: React.FC<ModalEditContactProps> = ({
  visible,
  contact,
  onClose,
  onUpdateContact,
}) => {
  const [formData, setFormData] = useState<Contact>({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<Contact>>({});

  useEffect(() => {
    if (contact) {
      setFormData({
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
        email: contact.email || "",
      });
    }
  }, [contact]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Contact> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Tên không được để trống";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Số điện thoại không được để trống";
    } else if (!/^\d{10,11}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdateContact = () => {
    if (validateForm()) {
      onUpdateContact(formData);
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
          <ModalHeader title="Sửa liên hệ" onClose={handleClose} />

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
                style={styles.updateButton}
                onPress={handleUpdateContact}
              >
                <Text style={styles.updateButtonText}>Cập nhật</Text>
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
  updateButton: {
    flex: 1,
    height: 48,
    backgroundColor: COLORS.warning,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: "center",
    alignItems: "center",
  },
  updateButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.white,
  },
});

export default ModalEditContact;
