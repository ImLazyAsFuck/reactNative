import React, { useCallback, useState } from "react";
import {
  Alert,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Job {
  id: string;
  title: string;
  createdAt: Date;
}

const INITIAL_JOBS: Job[] = [
  { id: "1", title: "Software Engineer", createdAt: new Date() },
  { id: "2", title: "Product Manager", createdAt: new Date() },
  { id: "3", title: "UI/UX Designer", createdAt: new Date() },
  { id: "4", title: "Data Analyst", createdAt: new Date() },
  { id: "5", title: "DevOps Engineer", createdAt: new Date() },
];

const E234 = () => {
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [jobTitle, setJobTitle] = useState<string>("");
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const generateId = () =>
    Date.now().toString() + Math.random().toString(36).substr(2, 9);

  const handleAddJob = useCallback(() => {
    const trimmedTitle = jobTitle.trim();
    if (trimmedTitle === "") {
      Alert.alert("Lỗi", "Vui lòng nhập tên công việc");
      return;
    }

    const newJob: Job = {
      id: generateId(),
      title: trimmedTitle,
      createdAt: new Date(),
    };

    setJobs((prevJobs) => [newJob, ...prevJobs]);
    setJobTitle("");
  }, [jobTitle]);

  const handleLoadMore = useCallback(() => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      const moreJobs: Job[] = [
        { id: generateId(), title: `Backend Developer`, createdAt: new Date() },
        { id: generateId(), title: `Mobile Developer`, createdAt: new Date() },
        { id: generateId(), title: `Database Designer`, createdAt: new Date() },
      ];

      setJobs((prevJobs) => [...prevJobs, ...moreJobs]);
      setLoading(false);
    }, 1000);
  }, [loading]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setJobs(INITIAL_JOBS);
      setRefreshing(false);
    }, 1000);
  }, []);

  const handleDeleteJob = useCallback((jobId: string) => {
    Alert.alert("Xác nhận xóa", "Bạn có chắc chắn muốn xóa công việc này?", [
      {
        text: "Hủy",
        style: "cancel",
      },
      {
        text: "Xóa",
        style: "destructive",
        onPress: () => {
          setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
        },
      },
    ]);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên công việc..."
          value={jobTitle}
          onChangeText={setJobTitle}
          returnKeyType="done"
          onSubmitEditing={handleAddJob}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddJob}>
          <Text style={styles.addButtonText}>Thêm</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatList}
        data={jobs}
        scrollEnabled={true}
        renderItem={({ item }) => (
          <View style={styles.jobItem}>
            <View style={styles.jobContent}>
              <Text style={styles.jobText}>{item.title}</Text>
              <Text style={styles.jobDate}>
                {item.createdAt.toLocaleDateString("vi-VN")}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteJob(item.id)}
            >
              <Text style={styles.deleteButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Chưa có công việc nào</Text>
            <Text style={styles.emptySubText}>
              Kéo xuống để làm mới hoặc thêm công việc mới
            </Text>
          </View>
        }
        ListHeaderComponent={
          jobs.length > 0 ? (
            <Text style={styles.listHeader}>Danh sách công việc</Text>
          ) : null
        }
        ListFooterComponent={
          jobs.length > 0 ? (
            <TouchableOpacity
              style={[
                styles.loadMoreButton,
                loading && styles.loadMoreButtonDisabled,
              ]}
              onPress={handleLoadMore}
              disabled={loading}
            >
              <Text
                style={[
                  styles.loadMoreText,
                  loading && styles.loadMoreTextDisabled,
                ]}
              >
                {loading ? "Đang tải..." : "Tải thêm"}
              </Text>
            </TouchableOpacity>
          ) : null
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={["#007AFF"]}
            tintColor="#007AFF"
          />
        }
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.flatListContent}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  jobItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
  },
  jobContent: {
    flex: 1,
  },
  jobText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  jobDate: {
    fontSize: 12,
    color: "#666",
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#666",
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    textAlign: "center",
    color: "#999",
    lineHeight: 20,
  },
  loadMoreButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  loadMoreButtonDisabled: {
    backgroundColor: "#ccc",
  },
  loadMoreText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loadMoreTextDisabled: {
    color: "#999",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default E234;
