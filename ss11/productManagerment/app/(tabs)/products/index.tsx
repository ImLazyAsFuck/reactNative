import ProductItem from "@/components/ProductItem";
import { EProductStatus } from "@/enums/product.enum";
import { IProduct } from "@/interface/Product.interface";
import React from "react";
import { StyleSheet, View } from "react-native";

const products: IProduct[] = [
  {
    id: "1",
    name: "Product 1",
    price: 100000,
    status: EProductStatus.NOT_YET_SALE,
  },
  {
    id: "2",
    name: "Product 2",
    price: 200000,
    status: EProductStatus.FOR_SALE,
  },
  {
    id: "3",
    name: "Product 3",
    price: 300000,
    status: EProductStatus.SOLD_OUT,
  },
];

const Products = () => {
  return (
    <View style={styles.container}>
      <ProductItem product={products[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Products;
