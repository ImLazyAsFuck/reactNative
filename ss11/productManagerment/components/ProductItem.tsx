import { EProductStatus } from "@/enums/product.enum";
import { IProduct } from "@/interface/Product.interface";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ProductProps {
  product: IProduct;
}

const ProductItem = ({ product }: ProductProps) => {
  const getStatusText = (status: EProductStatus) => {
    switch (status) {
      case EProductStatus.NOT_YET_SALE:
        return "CHƯA BÁN";
      case EProductStatus.FOR_SALE:
        return "ĐANG BÁN";
      case EProductStatus.SOLD_OUT:
        return "HẾT HÀNG";
      default:
        return "UNKNOWN";
    }
  };

  const getStatusColor = (status: EProductStatus) => {
    switch (status) {
      case EProductStatus.NOT_YET_SALE:
        return "#888";
      case EProductStatus.FOR_SALE:
        return "#10B981";
      case EProductStatus.SOLD_OUT:
        return "#EF4444";
      default:
        return "#6B7280";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>
          {product.price.toLocaleString("vi-VN")} VNĐ
        </Text>
        <View
          style={[
            styles.status,
            {
              borderColor: getStatusColor(product.status),
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              {
                color: getStatusColor(product.status),
              },
            ]}
          >
            {getStatusText(product.status)}
          </Text>
        </View>
      </View>
      <View style={styles.actions}>
        <FontAwesome onPress={() => {}} name="pencil" size={24} color="orange" />
        <FontAwesome onPress={() => {}} name="trash" size={24} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 10,
  },
  status: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 15,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
});

export default ProductItem;
