import React, { createContext, ReactNode, useContext, useState } from "react";

export type Theme = "light" | "dark";

export interface ThemeColors {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  primary: string;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: ThemeColors;
}

const themes: Record<Theme, ThemeColors> = {
  light: {
    background: "#ffffff",
    surface: "#f5f5f5",
    text: "#000000",
    textSecondary: "#666666",
    border: "#e0e0e0",
    primary: "#007AFF",
  },
  dark: {
    background: "#000000",
    surface: "#1c1c1c",
    text: "#ffffff",
    textSecondary: "#cccccc",
    border: "#333333",
    primary: "#0A84FF",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const colors = themes[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
