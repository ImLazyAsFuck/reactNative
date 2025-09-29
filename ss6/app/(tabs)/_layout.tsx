import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="e1"
        options={{
          title: "Bài 1",
        }}
      />
      <Tabs.Screen
        name="e234"
        options={{
          title: "Bài 2-3-4",
        }}
      />
      <Tabs.Screen
        name="e56"
        options={{
          title: "Bài 5-6",
        }}
      />
      <Tabs.Screen
        name="e7"
        options={{
          title: "Bài 7",
        }}
      />
      <Tabs.Screen
        name="e8"
        options={{
          title: "Bài 8",
        }}
      />
    </Tabs>
  );
}
