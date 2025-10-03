import { Stack } from "expo-router";
import React from "react";

export default function FeedLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#007AFF",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="FeedListScreen"
        options={{
          title: "Feed List",
        }}
      />
      <Stack.Screen
        name="FeedDetailScreen"
        options={{
          title: "Feed Detail",
        }}
      />
    </Stack>
  );
}
