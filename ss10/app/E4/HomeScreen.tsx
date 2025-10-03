import { Link, router } from "expo-router";
import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

const products = [
  {
    id: 1,
    name: "Sản phẩm 1",
  },
  {
    id: 2,
    name: "Sản phẩm 2",
  },
  {
    id: 3,
    name: "Sản phẩm 3",
  },
];

export default function HomeScreen() {
  return (
    <FlatList
      style={styles.container}
      data={products}
      renderItem={({ item }) => (
        <Link href={`/E4/ProductDetail?id=${item.id}`} style={styles.product}>
          <Text style={styles.productName}>{item.name}</Text>
        </Link>
      )}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>Danh sách sản phẩm</Text>
        </View>
      }
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Không có sản phẩm</Text>
        </View>
      }
      ListFooterComponent={
        <View style={styles.footer}>
          <Button title="Quay lại trang chủ" onPress={() => router.push("/")} />
        </View>
      }
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  product: {
    padding: 20,
    backgroundColor: "white",
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    marginTop: 20,
  },
});
