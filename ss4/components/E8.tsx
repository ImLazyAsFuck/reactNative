import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductItemProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductItem = ({ product, onAddToCart }: ProductItemProps) => {
  return (
    <View style={styles.productItem}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>
          {product.price.toLocaleString()}đ
        </Text>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => onAddToCart(product)}
      >
        <Text style={styles.addButtonText}>THÊM VÀO GIỎ</Text>
      </TouchableOpacity>
    </View>
  );
};

const E8 = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const products: Product[] = [
    { id: 1, name: "iPhone 15 Pro", price: 25000000 },
    { id: 2, name: "MacBook Air M3", price: 32000000 },
    { id: 3, name: "Apple Watch Series 9", price: 11000000 },
    { id: 4, name: "AirPods Pro 2", price: 6000000 },
  ];

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const getTotalItemsInCart = (): number => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bài 8:</Text>

      <View style={styles.cartHeader}>
        <Text style={styles.cartHeaderText}>
          Số mặt hàng trong giỏ: {getTotalItemsInCart()}
        </Text>
      </View>

      <View style={styles.productList}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  cartHeader: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cartHeaderText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  productList: {
    gap: 12,
  },
  productItem: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "#666",
  },
  addButton: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default E8;
