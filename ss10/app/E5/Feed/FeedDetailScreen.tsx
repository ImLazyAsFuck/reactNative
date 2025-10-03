import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface FeedItem {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: string;
  fullContent: string;
}

const mockFeedData: { [key: string]: FeedItem } = {
  "1": {
    id: "1",
    title: "React Native Tips",
    content:
      "Learn about the latest React Native features and best practices...",
    author: "John Doe",
    timestamp: "2 hours ago",
    fullContent: `React Native continues to evolve with exciting new features and improvements. Here are some essential tips to help you build better mobile applications:

1. **Use Hermes Engine**: Hermes is a JavaScript engine optimized for React Native that provides faster startup times and reduced memory usage. Enable it in your metro.config.js for better performance.

2. **Optimize Images**: Use the expo-image library instead of the default Image component for better performance and caching. It supports WebP format and provides better memory management.

3. **Implement Code Splitting**: Use dynamic imports and lazy loading to reduce your app's initial bundle size. This is especially important for larger applications.

4. **Use TypeScript**: TypeScript provides better type safety and improved developer experience. It helps catch errors at compile time and provides better IntelliSense support.

5. **Implement Proper Error Boundaries**: Use error boundaries to catch JavaScript errors anywhere in your component tree and display a fallback UI instead of crashing the app.

6. **Use Flipper for Debugging**: Flipper is a powerful debugging platform that provides network inspection, layout debugging, and performance monitoring tools.

7. **Optimize FlatList Performance**: Use getItemLayout, keyExtractor, and removeClippedSubviews for better performance when rendering large lists.

8. **Implement Proper State Management**: Choose the right state management solution (Redux, Zustand, or Context API) based on your app's complexity and requirements.

These tips will help you build more performant and maintainable React Native applications.`,
  },
  "2": {
    id: "2",
    title: "Expo Router Guide",
    content: "Understanding file-based routing in Expo Router...",
    author: "Jane Smith",
    timestamp: "4 hours ago",
    fullContent: `Expo Router brings file-based routing to React Native, making navigation more intuitive and similar to web development. Here's a comprehensive guide:

## Getting Started

Expo Router uses the file system to determine routes. Each file in the app directory becomes a route, and folders create nested routes.

## Basic Concepts

1. **File-based Routing**: The file structure in your app directory directly maps to your app's navigation structure.

2. **Layouts**: Use _layout.tsx files to define layouts for specific route groups. These can be Stack, Tabs, or Drawer navigators.

3. **Dynamic Routes**: Use square brackets in filenames to create dynamic routes (e.g., [id].tsx).

4. **Groups**: Use parentheses to create route groups without affecting the URL structure.

## Navigation

- Use router.push() to navigate to a new screen
- Use router.back() to go back
- Use router.replace() to replace the current screen
- Use router.canGoBack() to check if you can go back

## Best Practices

1. **Organize your routes logically**: Group related screens in folders
2. **Use layouts effectively**: Create layouts for different navigation patterns
3. **Handle deep linking**: Configure your app.json for proper deep linking support
4. **Use TypeScript**: Get better type safety and autocomplete for your routes

Expo Router makes navigation in React Native much more straightforward and maintainable.`,
  },
  "3": {
    id: "3",
    title: "Navigation Patterns",
    content: "Best practices for nested navigation in React Native apps...",
    author: "Mike Johnson",
    timestamp: "6 hours ago",
    fullContent: `Nested navigation is a common pattern in mobile applications. Here are the best practices for implementing it effectively:

## Common Navigation Patterns

### 1. Tab + Stack Navigation
This is the most common pattern where you have tabs at the bottom, and each tab contains a stack of screens.

### 2. Drawer + Stack Navigation
Use a drawer for main navigation and stacks for detailed flows within each section.

### 3. Modal + Stack Navigation
Present modals over your main navigation stack for specific user flows.

## Best Practices

1. **Keep Navigation Simple**: Don't nest too many navigators as it can make the navigation state complex.

2. **Use Consistent Patterns**: Stick to one navigation pattern throughout your app for better user experience.

3. **Handle Deep Linking**: Ensure your nested navigation works properly with deep links.

4. **Manage State Properly**: Use proper state management to handle navigation state across different navigators.

5. **Test Navigation Flows**: Thoroughly test all navigation paths to ensure they work as expected.

## Implementation Tips

- Use TypeScript for better type safety
- Implement proper error handling
- Use loading states during navigation
- Handle back button behavior appropriately
- Test on both iOS and Android

These patterns will help you create intuitive and maintainable navigation in your React Native applications.`,
  },
  "4": {
    id: "4",
    title: "Performance Optimization",
    content: "Tips to improve your React Native app performance...",
    author: "Sarah Wilson",
    timestamp: "8 hours ago",
    fullContent: `Performance is crucial for mobile applications. Here are comprehensive tips to optimize your React Native app:

## Bundle Size Optimization

1. **Remove Unused Code**: Use tools like Metro's tree shaking to remove dead code
2. **Use Hermes**: Enable Hermes engine for better performance
3. **Optimize Images**: Use appropriate image formats and sizes
4. **Code Splitting**: Implement lazy loading for screens and components

## Runtime Performance

1. **Optimize FlatList**: Use getItemLayout, keyExtractor, and removeClippedSubviews
2. **Avoid Inline Functions**: Don't create functions inside render methods
3. **Use React.memo**: Memoize components that don't need frequent re-renders
4. **Optimize State Updates**: Batch state updates and use useCallback/useMemo

## Memory Management

1. **Clean Up Subscriptions**: Remove event listeners and timers in useEffect cleanup
2. **Optimize Images**: Use appropriate image sizes and implement proper caching
3. **Avoid Memory Leaks**: Be careful with closures and references

## Network Optimization

1. **Implement Caching**: Cache API responses and images
2. **Use Pagination**: Load data in chunks instead of all at once
3. **Optimize API Calls**: Reduce the number of network requests

## UI Performance

1. **Use Native Driver**: Enable native driver for animations
2. **Optimize Renders**: Minimize unnecessary re-renders
3. **Use InteractionManager**: Defer non-critical operations until after interactions

These optimizations will significantly improve your app's performance and user experience.`,
  },
  "5": {
    id: "5",
    title: "State Management",
    content: "Choosing the right state management solution for your app...",
    author: "David Brown",
    timestamp: "1 day ago",
    fullContent: `Choosing the right state management solution is crucial for building maintainable React Native applications. Here's a comprehensive guide:

## Available Solutions

### 1. React Context + useReducer
- **Best for**: Small to medium apps
- **Pros**: Built into React, simple to understand
- **Cons**: Can cause unnecessary re-renders, not ideal for complex state

### 2. Redux Toolkit
- **Best for**: Large, complex applications
- **Pros**: Predictable state updates, excellent DevTools, time-travel debugging
- **Cons**: Steep learning curve, boilerplate code

### 3. Zustand
- **Best for**: Medium to large apps
- **Pros**: Simple API, TypeScript support, minimal boilerplate
- **Cons**: Less ecosystem compared to Redux

### 4. Jotai
- **Best for**: Apps with complex state dependencies
- **Pros**: Atomic approach, excellent TypeScript support
- **Cons**: Different mental model, smaller community

## Choosing the Right Solution

Consider these factors:

1. **App Size**: Larger apps benefit from more structured solutions
2. **Team Experience**: Choose what your team is comfortable with
3. **State Complexity**: Complex state logic requires more powerful tools
4. **Performance Requirements**: Some solutions are more performant than others

## Best Practices

1. **Start Simple**: Begin with Context API and migrate as needed
2. **Keep State Local**: Don't lift state up unnecessarily
3. **Use TypeScript**: Get better type safety and developer experience
4. **Test State Logic**: Write tests for your state management logic
5. **Document State Structure**: Keep your state structure well-documented

The key is to choose a solution that fits your app's needs and your team's expertise.`,
  },
};

export default function FeedDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const feedItem = mockFeedData[id || "1"];

  if (!feedItem) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Feed item not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.title}>{feedItem.title}</Text>

          <View style={styles.metaContainer}>
            <Text style={styles.author}>By {feedItem.author}</Text>
            <Text style={styles.timestamp}>{feedItem.timestamp}</Text>
          </View>

          <Text style={styles.fullContent}>{feedItem.fullContent}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    lineHeight: 32,
  },
  metaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  author: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "600",
  },
  timestamp: {
    fontSize: 14,
    color: "#666",
  },
  fullContent: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#666",
  },
});
