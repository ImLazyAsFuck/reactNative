import React, { useCallback, useMemo, useState } from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Product {
  id: string;
  name: string;
  price: number;
  brand?: string;
}

interface Section {
  title: string;
  data: Product[];
}

const PRODUCTS_DATA: Section[] = [
  {
    title: "Điện thoại",
    data: [
      { id: "1", name: "iPhone 15 Pro Max", price: 29990000, brand: "Apple" },
      {
        id: "2",
        name: "Samsung Galaxy S24 Ultra",
        price: 26990000,
        brand: "Samsung",
      },
      { id: "3", name: "Xiaomi 14 Ultra", price: 24990000, brand: "Xiaomi" },
      { id: "4", name: "OPPO Find X7", price: 19990000, brand: "OPPO" },
      { id: "5", name: "Vivo V30 Pro", price: 12990000, brand: "Vivo" },
    ],
  },
  {
    title: "Laptop",
    data: [
      { id: "6", name: "MacBook Pro M3", price: 52990000, brand: "Apple" },
      { id: "7", name: "Dell XPS 13", price: 32990000, brand: "Dell" },
      { id: "8", name: "HP Spectre x360", price: 28990000, brand: "HP" },
      { id: "9", name: "Lenovo ThinkPad X1", price: 35990000, brand: "Lenovo" },
      { id: "10", name: "ASUS ZenBook Pro", price: 31990000, brand: "ASUS" },
    ],
  },
  {
    title: "Máy tính bảng",
    data: [
      { id: "11", name: "iPad Pro M2", price: 26990000, brand: "Apple" },
      {
        id: "12",
        name: "Samsung Galaxy Tab S9",
        price: 21990000,
        brand: "Samsung",
      },
      {
        id: "13",
        name: "Microsoft Surface Pro",
        price: 24990000,
        brand: "Microsoft",
      },
      { id: "14", name: "Xiaomi Pad 6", price: 8990000, brand: "Xiaomi" },
      {
        id: "15",
        name: "Huawei MatePad Pro",
        price: 16990000,
        brand: "Huawei",
      },
    ],
  },
  {
    title: "Phụ kiện",
    data: [
      { id: "16", name: "AirPods Pro", price: 6490000, brand: "Apple" },
      { id: "17", name: "Sony WH-1000XM5", price: 8990000, brand: "Sony" },
      {
        id: "18",
        name: "Samsung Galaxy Buds",
        price: 3490000,
        brand: "Samsung",
      },
      {
        id: "19",
        name: "Anker PowerBank 20000mAh",
        price: 1290000,
        brand: "Anker",
      },
      {
        id: "20",
        name: "Logitech MX Master 3",
        price: 2490000,
        brand: "Logitech",
      },
    ],
  },
  {
    title: "Thực phẩm",
    data: [
      { id: "21", name: "Gạo ST25 Premium", price: 45000, brand: "Việt Nam" },
      { id: "22", name: "Thịt bò Wagyu", price: 2500000, brand: "Nhật Bản" },
      { id: "23", name: "Cà phê Arabica", price: 350000, brand: "Colombia" },
      {
        id: "24",
        name: "Mật ong rừng U Minh",
        price: 180000,
        brand: "Việt Nam",
      },
      { id: "25", name: "Chocolate Godiva", price: 890000, brand: "Bỉ" },
    ],
  },
];

const E56 = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return PRODUCTS_DATA;
    }

    const query = searchQuery.toLowerCase().trim();

    return PRODUCTS_DATA.map((section) => ({
      title: section.title,
      data: section.data.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          (product.brand && product.brand.toLowerCase().includes(query))
      ),
    })).filter((section) => section.data.length > 0);
  }, [searchQuery]);

  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <TouchableOpacity style={styles.productItem}>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          {item.brand && <Text style={styles.productBrand}>{item.brand}</Text>}
        </View>
        <Text style={styles.productPrice}>{formatPrice(item.price)}</Text>
      </TouchableOpacity>
    ),
    [formatPrice]
  );

  const renderSectionHeader = useCallback(
    ({ section }: { section: Section }) => (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <Text style={styles.sectionCount}>({section.data.length})</Text>
      </View>
    ),
    []
  );

  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Không tìm thấy sản phẩm nào</Text>
        <Text style={styles.emptySubText}>Thử tìm kiếm với từ khóa khác</Text>
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Danh mục sản phẩm</Text>
        <Text style={styles.subtitle}>
          {searchQuery ? `Kết quả cho "${searchQuery}"` : "Tất cả sản phẩm"}
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm sản phẩm, thương hiệu..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => setSearchQuery("")}
          >
            <Text style={styles.clearButtonText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <SectionList
        sections={filteredData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
        style={styles.sectionList}
        contentContainerStyle={styles.sectionListContent}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        SectionSeparatorComponent={() => (
          <View style={styles.sectionSeparator} />
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Tổng cộng:{" "}
          {filteredData.reduce((sum, section) => sum + section.data.length, 0)}{" "}
          sản phẩm
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212529",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#6c757d",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  clearButton: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: "#6c757d",
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  sectionList: {
    flex: 1,
  },
  sectionListContent: {
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#e9ecef",
    borderTopWidth: 1,
    borderTopColor: "#dee2e6",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#495057",
  },
  sectionCount: {
    fontSize: 14,
    color: "#6c757d",
    fontWeight: "500",
  },
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
  },
  productInfo: {
    flex: 1,
    marginRight: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212529",
    marginBottom: 4,
  },
  productBrand: {
    fontSize: 14,
    color: "#6c757d",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },
  separator: {
    height: 1,
    backgroundColor: "#e9ecef",
    marginLeft: 20,
  },
  sectionSeparator: {
    height: 8,
    backgroundColor: "#f8f9fa",
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6c757d",
    marginBottom: 8,
    textAlign: "center",
  },
  emptySubText: {
    fontSize: 14,
    color: "#adb5bd",
    textAlign: "center",
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e9ecef",
  },
  footerText: {
    fontSize: 14,
    color: "#6c757d",
    textAlign: "center",
    fontWeight: "500",
  },
});

export default E56;
