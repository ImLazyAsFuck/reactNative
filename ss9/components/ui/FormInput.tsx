import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { BORDER_RADIUS, COLORS, SPACING } from "../../constants/shared";

interface FormInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "email-address" | "phone-pad";
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
}) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    keyboardType={keyboardType}
    autoCapitalize="none"
  />
);

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    fontSize: 16,
    color: COLORS.dark,
  },
});

export default FormInput;
