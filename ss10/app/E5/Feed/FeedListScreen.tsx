import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface FeedItem {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: string;
}

const mockFeedData: FeedItem[] = [
  {
    id: "1",
    title: "React Native Tips",
    content:
      "Learn about the latest React Native features and best practices...",
    author: "John Doe",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    title: "Expo Router Guide",
    content: "Understanding file-based routing in Expo Router...",
    author: "Jane Smith",
    timestamp: "4 hours ago",
  },
  {
    id: "3",
    title: "Navigation Patterns",
    content: "Best practices for nested navigation in React Native apps...",
    author: "Mike Johnson",
    timestamp: "6 hours ago",
  },
  {
    id: "4",
    title: "Performance Optimization",
    content: "Tips to improve your React Native app performance...",
    author: "Sarah Wilson",
    timestamp: "8 hours ago",
  },
  {
    id: "5",
    title: "State Management",
    content: "Choosing the right state management solution for your app...",
    author: "David Brown",
    timestamp: "1 day ago",
  },
];

export default function FeedListScreen() {
  const renderFeedItem = ({ item }: { item: FeedItem }) => (
    <TouchableOpacity
      style={styles.feedItem}
      onPress={() => router.push(`/E6/Feed/FeedDetailScreen?id=${item.id}`)}
    >
      <Text style={styles.feedTitle}>{item.title}</Text>
      <Text style={styles.feedContent} numberOfLines={2}>
        {item.content}
      </Text>
      <View style={styles.feedMeta}>
        <Text style={styles.feedAuthor}>By {item.author}</Text>
        <Text style={styles.feedTimestamp}>{item.timestamp}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockFeedData}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 16,
  },
  feedItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  feedTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  feedContent: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  feedMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  feedAuthor: {
    fontSize: 12,
    color: "#007AFF",
    fontWeight: "500",
  },
  feedTimestamp: {
    fontSize: 12,
    color: "#999",
  },
});
