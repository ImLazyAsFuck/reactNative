import { Picker } from "@react-native-picker/picker";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  stockQuantity: number;
}

const E10 = () => {
  const [searchText, setSearchText] = useState("");
  const [isStockOnly, setIsStockOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const originalProducts: Product[] = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "Điện thoại",
      price: 25000000,
      inStock: true,
      stockQuantity: 15,
    },
    {
      id: 2,
      name: "MacBook Air M3",
      category: "Laptop",
      price: 32000000,
      inStock: true,
      stockQuantity: 8,
    },
    {
      id: 3,
      name: "iPad Pro 12.9",
      category: "Máy tính bảng",
      price: 28000000,
      inStock: false,
      stockQuantity: 0,
    },
    {
      id: 4,
      name: "Apple Watch Series 9",
      category: "Đồng hồ thông minh",
      price: 11000000,
      inStock: true,
      stockQuantity: 25,
    },
    {
      id: 5,
      name: "AirPods Pro 2",
      category: "Tai nghe",
      price: 6000000,
      inStock: true,
      stockQuantity: 50,
    },
    {
      id: 6,
      name: "Samsung Galaxy S24",
      category: "Điện thoại",
      price: 22000000,
      inStock: false,
      stockQuantity: 0,
    },
    {
      id: 7,
      name: "Dell XPS 13",
      category: "Laptop",
      price: 28000000,
      inStock: true,
      stockQuantity: 12,
    },
    {
      id: 8,
      name: "Sony WH-1000XM5",
      category: "Tai nghe",
      price: 8000000,
      inStock: true,
      stockQuantity: 30,
    },
    {
      id: 9,
      name: "Samsung Galaxy Tab S9",
      category: "Máy tính bảng",
      price: 18000000,
      inStock: false,
      stockQuantity: 0,
    },
    {
      id: 10,
      name: "Garmin Forerunner 965",
      category: "Đồng hồ thông minh",
      price: 15000000,
      inStock: true,
      stockQuantity: 7,
    },
  ];

  const categories = [
    "all",
    ...Array.from(new Set(originalProducts.map((product) => product.category))),
  ];

  const filteredProducts = useMemo(() => {
    return originalProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesStock = isStockOnly ? product.inStock : true;

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchesSearch && matchesStock && matchesCategory;
    });
  }, [searchText, isStockOnly, selectedCategory]);

  const renderProductItem = ({ item }: { item: Product }) => (
    <View style={styles.productItem}>
      <View style={styles.productHeader}>
        <Text style={styles.productName}>{item.name}</Text>
        <View
          style={[
            styles.stockBadge,
            item.inStock ? styles.inStock : styles.outOfStock,
          ]}
        >
          <Text
            style={[
              styles.stockText,
              item.inStock ? styles.inStockText : styles.outOfStockText,
            ]}
          >
            {item.inStock ? `Còn ${item.stockQuantity}` : "Hết hàng"}
          </Text>
        </View>
      </View>
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productPrice}>{item.price.toLocaleString()}đ</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bài 10: Lọc & Tìm kiếm sản phẩm</Text>

      <View style={styles.filtersContainer}>
        <View style={styles.searchContainer}>
          <Text style={styles.filterLabel}>Tìm kiếm:</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Nhập tên sản phẩm..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.filterLabel}>
            Chỉ hiển thị hàng còn trong kho:
          </Text>
          <Switch
            value={isStockOnly}
            onValueChange={setIsStockOnly}
            trackColor={{ false: "#ddd", true: "#007AFF" }}
            thumbColor="#fff"
          />
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.filterLabel}>Danh mục:</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={setSelectedCategory}
              style={styles.picker}
            >
              <Picker.Item label="Tất cả danh mục" value="all" />
              {categories
                .filter((cat) => cat !== "all")
                .map((category) => (
                  <Picker.Item
                    key={category}
                    label={category}
                    value={category}
                  />
                ))}
            </Picker>
          </View>
        </View>
      </View>

      <View style={styles.resultsHeader}>
        <Text style={styles.resultsCount}>
          Tìm thấy {filteredProducts.length} sản phẩm
        </Text>
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Không tìm thấy sản phẩm nào phù hợp với bộ lọc
            </Text>
          </View>
        }
      />
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
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  filtersContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchContainer: {
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
    color: "#333",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  pickerContainer: {
    marginBottom: 8,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fafafa",
    overflow: "hidden",
  },
  picker: {
    height: 50,
    color: "#333",
  },
  resultsHeader: {
    marginBottom: 12,
  },
  resultsCount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  productItem: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    marginRight: 12,
  },
  stockBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 80,
    alignItems: "center",
  },
  inStock: {
    backgroundColor: "#e8f5e8",
  },
  outOfStock: {
    backgroundColor: "#ffeaea",
  },
  stockText: {
    fontSize: 12,
    fontWeight: "600",
  },
  inStockText: {
    color: "#2e7d32",
  },
  outOfStockText: {
    color: "#d32f2f",
  },
  productCategory: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
  },
});

export default E10;
