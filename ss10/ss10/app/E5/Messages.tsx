import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Message {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  avatar: string;
}

const mockMessages: Message[] = [
  {
    id: "1",
    sender: "Alice Johnson",
    message: "Hey! How's the React Native project going?",
    timestamp: "2 min ago",
    isRead: false,
    avatar: "A",
  },
  {
    id: "2",
    sender: "Bob Smith",
    message: "Thanks for the help with the navigation issue!",
    timestamp: "1 hour ago",
    isRead: true,
    avatar: "B",
  },
  {
    id: "3",
    sender: "Carol Davis",
    message: "Can we schedule a meeting for tomorrow?",
    timestamp: "3 hours ago",
    isRead: false,
    avatar: "C",
  },
  {
    id: "4",
    sender: "David Wilson",
    message: "The new design looks amazing! Great work!",
    timestamp: "5 hours ago",
    isRead: true,
    avatar: "D",
  },
  {
    id: "5",
    sender: "Emma Brown",
    message: "I've sent you the updated requirements document",
    timestamp: "1 day ago",
    isRead: true,
    avatar: "E",
  },
  {
    id: "6",
    sender: "Frank Miller",
    message: "Let's discuss the performance optimization strategy",
    timestamp: "2 days ago",
    isRead: false,
    avatar: "F",
  },
];

export default function MessagesScreen() {
  const renderMessage = ({ item }: { item: Message }) => (
    <TouchableOpacity style={styles.messageItem}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.avatar}</Text>
        </View>
        {!item.isRead && <View style={styles.unreadDot} />}
      </View>

      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.senderName}>{item.sender}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <Text
          style={[styles.messageText, !item.isRead && styles.unreadMessageText]}
          numberOfLines={2}
        >
          {item.message}
        </Text>
      </View>

      <View style={styles.messageActions}>
        <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity style={styles.composeButton}>
          <Ionicons name="create-outline" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockMessages}
        renderItem={renderMessage}
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  composeButton: {
    padding: 8,
  },
  listContainer: {
    paddingTop: 8,
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  avatarContainer: {
    position: "relative",
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  unreadDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FF3B30",
  },
  messageContent: {
    flex: 1,
    marginRight: 12,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  senderName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  timestamp: {
    fontSize: 12,
    color: "#8E8E93",
  },
  messageText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 18,
  },
  unreadMessageText: {
    fontWeight: "600",
    color: "#333",
  },
  messageActions: {
    padding: 4,
  },
});
