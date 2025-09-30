import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
}

const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const mockSearchAPI = async (query: string): Promise<SearchResult[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const mockData: SearchResult[] = [
    {
      id: "1",
      title: "React Native Development",
      description: "Learn React Native from basics to advanced concepts",
      category: "Programming",
    },
    {
      id: "2",
      title: "JavaScript Fundamentals",
      description: "Master JavaScript programming language",
      category: "Programming",
    },
    {
      id: "3",
      title: "TypeScript Guide",
      description: "Complete guide to TypeScript development",
      category: "Programming",
    },
    {
      id: "4",
      title: "Mobile App Design",
      description: "UI/UX design principles for mobile applications",
      category: "Design",
    },
    {
      id: "5",
      title: "API Integration",
      description: "How to integrate APIs in mobile applications",
      category: "Backend",
    },
    {
      id: "6",
      title: "State Management",
      description: "Managing application state with Redux and Context",
      category: "Programming",
    },
    {
      id: "7",
      title: "Performance Optimization",
      description: "Tips and tricks for optimizing React Native apps",
      category: "Performance",
    },
    {
      id: "8",
      title: "Testing Strategies",
      description: "Unit testing and integration testing in React Native",
      category: "Testing",
    },
  ];

  if (!query.trim()) {
    return [];
  }

  return mockData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );
};

const SearchResultItem: React.FC<{ item: SearchResult }> = ({ item }) => {
  return (
    <View style={styles.resultItem}>
      <Text style={styles.resultTitle}>{item.title}</Text>
      <Text style={styles.resultDescription}>{item.description}</Text>
      <Text style={styles.resultCategory}>{item.category}</Text>
    </View>
  );
};

const E8 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCount, setSearchCount] = useState(0);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const performSearch = async () => {
      if (debouncedSearchQuery.trim()) {
        setIsLoading(true);
        try {
          const results = await mockSearchAPI(debouncedSearchQuery);
          setSearchResults(results);
          setSearchCount((prev) => prev + 1);
        } catch (error) {
          Alert.alert("Error", "Failed to search. Please try again.");
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    performSearch();
  }, [debouncedSearchQuery]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search with Debounce</Text>
        <Text style={styles.subtitle}>
          Type to search (500ms delay) • API calls: {searchCount}
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for courses, topics..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {isLoading && <ActivityIndicator style={styles.loader} size="small" />}
      </View>

      <View style={styles.resultsContainer}>
        {searchQuery && !isLoading && searchResults.length === 0 && (
          <Text style={styles.noResults}>No results found</Text>
        )}

        {searchQuery && searchResults.length > 0 && (
          <Text style={styles.resultsCount}>
            {searchResults.length} result{searchResults.length !== 1 ? "s" : ""}{" "}
            found
          </Text>
        )}

        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SearchResultItem item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>How it works:</Text>
        <Text style={styles.infoText}>
          • useDebounce hook delays API calls by 500ms
        </Text>
        <Text style={styles.infoText}>
          • API only called when user stops typing
        </Text>
        <Text style={styles.infoText}>• Prevents excessive API requests</Text>
      </View>
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
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  loader: {
    marginLeft: 12,
  },
  resultsContainer: {
    flex: 1,
    padding: 16,
  },
  resultsCount: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  noResults: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 40,
  },
  listContainer: {
    paddingBottom: 20,
  },
  resultItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  resultDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    lineHeight: 20,
  },
  resultCategory: {
    fontSize: 12,
    color: "#007AFF",
    fontWeight: "500",
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
});

export default E8;
