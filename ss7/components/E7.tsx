import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

interface E7Item {
  id: string;
  title: string;
  description: string;
  color: string;
}

const E7Item: React.FC<{ item: E7Item; isLandscape: boolean }> = ({
  item,
  isLandscape,
}) => {
  return (
    <View
      style={[
        styles.item,
        { backgroundColor: item.color },
        isLandscape ? styles.itemLandscape : styles.itemPortrait,
      ]}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );
};

const E7 = () => {
  const { width, height } = Dimensions.get("window");
  const isLandscape = width > height;

  const data: E7Item[] = [
    {
      id: "1",
      title: "Item 1",
      description: "This is the first item in our responsive list",
      color: "#FF6B6B",
    },
    {
      id: "2",
      title: "Item 2",
      description: "Second item with different content",
      color: "#4ECDC4",
    },
    {
      id: "3",
      title: "Item 3",
      description: "Third item for demonstration",
      color: "#45B7D1",
    },
    {
      id: "4",
      title: "Item 4",
      description: "Fourth item in the collection",
      color: "#96CEB4",
    },
    {
      id: "5",
      title: "Item 5",
      description: "Fifth item with unique styling",
      color: "#FFEAA7",
    },
    {
      id: "6",
      title: "Item 6",
      description: "Sixth item for grid layout",
      color: "#DDA0DD",
    },
    {
      id: "7",
      title: "Item 7",
      description: "Seventh item in the list",
      color: "#98D8C8",
    },
    {
      id: "8",
      title: "Item 8",
      description: "Eighth and final item",
      color: "#F7DC6F",
    },
  ];

  const numColumns = isLandscape ? 2 : 1;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Responsive Layout</Text>
        <Text style={styles.orientationText}>
          {isLandscape ? "🌓 Landscape Mode" : "📱 Portrait Mode"}
        </Text>
        <Text style={styles.dimensionsText}>
          {width} x {height}
        </Text>
      </View>

      <FlatList
        data={data}
        key={numColumns}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <E7Item item={item} isLandscape={isLandscape} />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  orientationText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  dimensionsText: {
    fontSize: 14,
    color: "#999",
  },
  listContainer: {
    padding: 16,
  },
  item: {
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
  itemPortrait: {
    marginHorizontal: 0,
  },
  itemLandscape: {
    flex: 1,
    marginHorizontal: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
    lineHeight: 20,
  },
});

export default E7;
