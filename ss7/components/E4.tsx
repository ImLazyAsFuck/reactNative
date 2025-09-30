import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const E4 = () => {
  const netInfo = useNetInfo();
  return (
    <View style={styles.container}>
      {!netInfo.isConnected && (
        <View style={styles.noConnection}>
          <Text style={styles.noConnectionText}>Không kết nối mạng</Text>
        </View>
      )}
      <Text style={styles.text}>
        Có đang kết nối mạng?{" "}
        <Text style={styles.textBold}>
          {netInfo.isConnected ? "Có" : "Không"}
        </Text>
      </Text>
      <Text style={styles.text}>
        Loại kêt nối: <Text style={styles.textBold}>{netInfo.type}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  textBold: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
    fontWeight: "bold",
  },
  noConnection: {
    fontSize: 16,
    marginBottom: 10,
    color: "white",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  noConnectionText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default E4;
