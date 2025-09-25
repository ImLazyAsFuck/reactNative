import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
interface CurrencyInputProps {
  currency: "VND" | "USD";
  value: string;
  onChangeValue: (currency: "VND" | "USD", value: string) => void;
}

const CurrencyInput = ({
  currency,
  value,
  onChangeValue,
}: CurrencyInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.currencyLabel}>{currency}:</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text) => onChangeValue(currency, text)}
        keyboardType="numeric"
        placeholder={`Nhập số tiền ${currency}`}
        placeholderTextColor="#999"
      />
    </View>
  );
};
const E5 = () => {
  const [vndValue, setVndValue] = useState("");
  const [usdValue, setUsdValue] = useState("");

  const EXCHANGE_RATE = 25000;
  const handleCurrencyChange = (currency: "VND" | "USD", value: string) => {
    const cleanValue = value.replace(/[^0-9.]/g, "");

    if (currency === "VND") {
      setVndValue(cleanValue);
      if (cleanValue === "") {
        setUsdValue("");
      } else {
        const vndAmount = parseFloat(cleanValue);
        if (!isNaN(vndAmount)) {
          const usdAmount = (vndAmount / EXCHANGE_RATE).toFixed(2);
          setUsdValue(usdAmount);
        }
      }
    } else if (currency === "USD") {
      setUsdValue(cleanValue);
      if (cleanValue === "") {
        setVndValue("");
      } else {
        const usdAmount = parseFloat(cleanValue);
        if (!isNaN(usdAmount)) {
          const vndAmount = (usdAmount * EXCHANGE_RATE).toFixed(0);
          setVndValue(vndAmount);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bài 5: Chuyển đổi tiền tệ</Text>

      <View style={styles.converterContainer}>
        <Text style={styles.subtitle}>VND ⇄ USD Converter</Text>
        <Text style={styles.exchangeRate}>Tỷ giá: 1 USD = 25,000 VND</Text>
        <CurrencyInput
          currency="VND"
          value={vndValue}
          onChangeValue={handleCurrencyChange}
        />
        <CurrencyInput
          currency="USD"
          value={usdValue}
          onChangeValue={handleCurrencyChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  converterContainer: {
    backgroundColor: "#f8f9fa",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#007AFF",
    textAlign: "center",
    marginBottom: 10,
  },
  exchangeRate: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    fontStyle: "italic",
  },
  inputContainer: {
    marginBottom: 15,
  },
  currencyLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#007AFF",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: "white",
    color: "#333",
  },
});

export default E5;
