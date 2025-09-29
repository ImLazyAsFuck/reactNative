import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: Date;
  content: string;
  category: string;
  readTime: number;
}

const initialPosts: BlogPost[] = [
  {
    id: "1",
    title: "Khởi đầu với React Native",
    author: "Nguyễn Văn A",
    date: new Date("2024-01-15"),
    content:
      "Hướng dẫn chi tiết về cách bắt đầu với React Native từ cơ bản đến nâng cao.",
    category: "Lập trình",
    readTime: 5,
  },
  {
    id: "2",
    title: "TypeScript cho người mới bắt đầu",
    author: "Trần Thị B",
    date: new Date("2024-01-20"),
    content:
      "Tìm hiểu về TypeScript và cách sử dụng nó trong các dự án JavaScript.",
    category: "Lập trình",
    readTime: 8,
  },
  {
    id: "3",
    title: "Thiết kế UI/UX hiện đại",
    author: "Lê Văn C",
    date: new Date("2024-01-25"),
    content: "Các nguyên tắc thiết kế UI/UX cho ứng dụng di động hiện đại.",
    category: "Thiết kế",
    readTime: 6,
  },
  {
    id: "4",
    title: "Tối ưu hiệu suất ứng dụng",
    author: "Phạm Thị D",
    date: new Date("2024-02-01"),
    content: "Kỹ thuật tối ưu hiệu suất cho ứng dụng React Native.",
    category: "Lập trình",
    readTime: 10,
  },
  {
    id: "5",
    title: "Quản lý state với Redux",
    author: "Hoàng Văn E",
    date: new Date("2024-02-05"),
    content: "Hướng dẫn sử dụng Redux để quản lý state trong ứng dụng lớn.",
    category: "Lập trình",
    readTime: 12,
  },
];

const additionalPosts: BlogPost[] = [
  {
    id: "6",
    title: "Bảo mật ứng dụng di động",
    author: "Vũ Thị F",
    date: new Date("2024-02-10"),
    content: "Các biện pháp bảo mật cần thiết cho ứng dụng di động.",
    category: "Bảo mật",
    readTime: 9,
  },
  {
    id: "7",
    title: "Testing trong React Native",
    author: "Đỗ Văn G",
    date: new Date("2024-02-15"),
    content: "Hướng dẫn viết unit test và integration test cho React Native.",
    category: "Testing",
    readTime: 7,
  },
  {
    id: "8",
    title: "Deploy ứng dụng lên Store",
    author: "Ngô Thị H",
    date: new Date("2024-02-20"),
    content:
      "Quy trình deploy ứng dụng React Native lên App Store và Google Play.",
    category: "DevOps",
    readTime: 15,
  },
];

const E8 = () => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loadedAdditional, setLoadedAdditional] = useState<boolean>(false);

  const formatDate = useCallback((date: Date) => {
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }, []);

  const handleLoadMore = useCallback(() => {
    if (loading || !hasMore || loadedAdditional) return;

    setLoading(true);

    setTimeout(() => {
      setPosts((prevPosts) => [...prevPosts, ...additionalPosts]);
      setLoading(false);
      setLoadedAdditional(true);
      setHasMore(false);
    }, 2500);
  }, [loading, hasMore, loadedAdditional]);

  const renderPost = useCallback(
    ({ item }: { item: BlogPost }) => (
      <View style={styles.postCard}>
        <View style={styles.postHeader}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          <Text style={styles.readTime}>{item.readTime} phút đọc</Text>
        </View>

        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postContent} numberOfLines={2}>
          {item.content}
        </Text>

        <View style={styles.postFooter}>
          <View style={styles.authorInfo}>
            <Text style={styles.authorName}>👤 {item.author}</Text>
            <Text style={styles.postDate}>📅 {formatDate(item.date)}</Text>
          </View>
        </View>
      </View>
    ),
    [formatDate]
  );

  const renderHeader = useCallback(
    () => (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>📝 Danh sách bài viết</Text>
        <Text style={styles.headerSubtitle}>
          Tổng cộng: {posts.length} bài viết
        </Text>
        <View style={styles.headerDivider} />
      </View>
    ),
    [posts.length]
  );

  const renderFooter = useCallback(() => {
    if (!loading) return null;

    return (
      <View style={styles.footerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Đang tải thêm bài viết...</Text>
      </View>
    );
  }, [loading]);

  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>📄</Text>
        <Text style={styles.emptyText}>Chưa có bài viết nào</Text>
        <Text style={styles.emptySubText}>
          Hãy quay lại sau để xem thêm bài viết mới
        </Text>
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {!hasMore && loadedAdditional && (
        <View style={styles.endContainer}>
          <Text style={styles.endText}>✅ Đã tải hết tất cả bài viết</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  headerContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#212529",
    marginBottom: 8,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
    fontWeight: "500",
  },
  headerDivider: {
    height: 3,
    backgroundColor: "#007AFF",
    marginTop: 16,
    borderRadius: 2,
  },
  postCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  categoryBadge: {
    backgroundColor: "#e3f2fd",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  categoryText: {
    fontSize: 12,
    color: "#1976d2",
    fontWeight: "600",
  },
  readTime: {
    fontSize: 12,
    color: "#6c757d",
    fontWeight: "500",
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212529",
    marginBottom: 8,
    lineHeight: 28,
  },
  postContent: {
    fontSize: 14,
    color: "#495057",
    lineHeight: 22,
    marginBottom: 16,
  },
  postFooter: {
    borderTopWidth: 1,
    borderTopColor: "#e9ecef",
    paddingTop: 12,
  },
  authorInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorName: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "500",
  },
  postDate: {
    fontSize: 12,
    color: "#6c757d",
  },
  separator: {
    height: 16,
  },
  footerContainer: {
    paddingVertical: 30,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "500",
  },
  endContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  endText: {
    fontSize: 14,
    color: "#28a745",
    fontWeight: "600",
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 20,
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
});

export default E8;
