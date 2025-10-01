import { Colors } from "@/constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Product {
  productId: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CartItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

const E7 = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const products: Product[] = [
    {
      productId: "a1",
      name: "Laptop Gaming",
      price: 25000000,
      image: "https://via.placeholder.com/200x150/007AFF/FFFFFF?text=Laptop",
      description: "Laptop gaming hiệu năng cao với card đồ họa RTX 4060",
    },
    {
      productId: "a2",
      name: "iPhone 15 Pro",
      price: 30000000,
      image: "https://via.placeholder.com/200x150/34C759/FFFFFF?text=iPhone",
      description: "iPhone 15 Pro với chip A17 Pro và camera 48MP",
    },
    {
      productId: "a3",
      name: "Samsung Galaxy S24",
      price: 22000000,
      image: "https://via.placeholder.com/200x150/FF9500/FFFFFF?text=Galaxy",
      description: "Samsung Galaxy S24 với màn hình Dynamic AMOLED 2X",
    },
    {
      productId: "a4",
      name: "MacBook Air M2",
      price: 35000000,
      image: "https://via.placeholder.com/200x150/FF2D92/FFFFFF?text=MacBook",
      description: "MacBook Air với chip M2, hiệu năng vượt trội",
    },
  ];

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const savedCart = await AsyncStorage.getItem("cart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      }
    } catch (error) {
      console.error("Error loading cart:", error);
      Alert.alert("Lỗi", "Không thể tải giỏ hàng");
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (product: Product) => {
    try {
      const existingItemIndex = cart.findIndex(
        (item) => item.productId === product.productId
      );

      let updatedCart: CartItem[];

      if (existingItemIndex >= 0) {
        updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        const newCartItem: CartItem = {
          productId: product.productId,
          name: product.name,
          quantity: 1,
          price: product.price,
        };
        updatedCart = [...cart, newCartItem];
      }

      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
      Alert.alert("Thành công", `Đã thêm ${product.name} vào giỏ hàng!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      Alert.alert("Lỗi", "Không thể thêm sản phẩm vào giỏ hàng");
    }
  };

  const removeFromCart = async (productId: string) => {
    try {
      const updatedCart = cart.filter((item) => item.productId !== productId);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
      Alert.alert("Thành công", "Đã xóa sản phẩm khỏi giỏ hàng!");
    } catch (error) {
      console.error("Error removing from cart:", error);
      Alert.alert("Lỗi", "Không thể xóa sản phẩm khỏi giỏ hàng");
    }
  };

  const updateQuantity = async (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    try {
      const updatedCart = cart.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      );
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (error) {
      console.error("Error updating quantity:", error);
      Alert.alert("Lỗi", "Không thể cập nhật số lượng");
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const currentColors = Colors.light;

  if (isLoading) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: currentColors.background },
        ]}
      >
        <View style={styles.loadingContainer}>
          <Text style={[styles.loadingText, { color: currentColors.text }]}>
            Đang tải...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const renderProduct = ({ item }: { item: Product }) => (
    <View
      style={[
        styles.productCard,
        { backgroundColor: currentColors.background },
      ]}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={[styles.productName, { color: currentColors.text }]}>
          {item.name}
        </Text>
        <Text style={[styles.productPrice, { color: currentColors.tint }]}>
          {formatPrice(item.price)}
        </Text>
        <Text
          style={[styles.productDescription, { color: currentColors.icon }]}
        >
          {item.description}
        </Text>
        <TouchableOpacity
          style={[
            styles.addToCartButton,
            { backgroundColor: currentColors.tint },
          ]}
          onPress={() => addToCart(item)}
        >
          <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View
      style={[styles.cartItem, { backgroundColor: currentColors.background }]}
    >
      <View style={styles.cartItemInfo}>
        <Text style={[styles.cartItemName, { color: currentColors.text }]}>
          {item.name}
        </Text>
        <Text style={[styles.cartItemPrice, { color: currentColors.tint }]}>
          {formatPrice(item.price)} x {item.quantity}
        </Text>
      </View>
      <View style={styles.cartItemActions}>
        <TouchableOpacity
          style={[
            styles.quantityButton,
            { backgroundColor: currentColors.icon },
          ]}
          onPress={() => updateQuantity(item.productId, item.quantity - 1)}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={[styles.quantityText, { color: currentColors.text }]}>
          {item.quantity}
        </Text>
        <TouchableOpacity
          style={[
            styles.quantityButton,
            { backgroundColor: currentColors.tint },
          ]}
          onPress={() => updateQuantity(item.productId, item.quantity + 1)}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.removeButton, { backgroundColor: "#ff4444" }]}
          onPress={() => removeFromCart(item.productId)}
        >
          <Text style={styles.removeButtonText}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: currentColors.background }]}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: currentColors.text }]}>
            Cửa hàng
          </Text>
          <View style={styles.cartSummary}>
            <Text
              style={[styles.cartSummaryText, { color: currentColors.text }]}
            >
              Giỏ hàng: {getTotalItems()} sản phẩm
            </Text>
            <Text
              style={[styles.cartTotalPrice, { color: currentColors.tint }]}
            >
              Tổng: {formatPrice(getTotalPrice())}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
            Sản phẩm
          </Text>
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.productId}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {cart.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
              Giỏ hàng ({getTotalItems()} sản phẩm)
            </Text>
            <FlatList
              data={cart}
              renderItem={renderCartItem}
              keyExtractor={(item) => item.productId}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "500",
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  cartSummary: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  cartSummaryText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  cartTotalPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  productCard: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  addToCartButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  addToCartText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  cartItemPrice: {
    fontSize: 14,
    fontWeight: "500",
  },
  cartItemActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    minWidth: 30,
    textAlign: "center",
  },
  removeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  removeButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default E7;
