export interface Contact {
  id?: string;
  name: string;
  phone: string;
  email: string;
}

export type ContactAction =
  | { type: "SET_CONTACTS"; payload: Contact[] }
  | { type: "ADD_CONTACT"; payload: Contact }
  | { type: "REMOVE_CONTACT"; payload: string }
  | { type: "UPDATE_CONTACT"; payload: Contact }
  | { type: "SET_LOADING"; payload: boolean };

export const COLORS = {
  primary: "#0066ff",
  primaryDark: "#0052cc",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  light: "#f8f9fa",
  dark: "#343a40",
  white: "#ffffff",
  gray: "#6c757d",
  lightGray: "#e9ecef",
  border: "#dee2e6",
  overlay: "rgba(0, 0, 0, 0.5)",
  error: "#dc3545",
  background: "#f5f5f5",
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
};

export const STORAGE_KEY = "contacts";
