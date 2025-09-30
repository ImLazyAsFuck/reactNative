import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text } from "react-native";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "#ccc",
        tabBarItemStyle: {
          width: "auto",
          minWidth: 50,
          paddingHorizontal: 4,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          height: Platform.OS === "ios" ? 80 : 60,
          paddingBottom: Platform.OS === "ios" ? 20 : 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="e1"
        options={{
          title: "E1",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>1️⃣</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="e2"
        options={{
          title: "E2",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>2️⃣</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="e3"
        options={{
          title: "E3",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>3️⃣</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="e4"
        options={{
          title: "E4",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>4️⃣</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="e5"
        options={{
          title: "E5",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>5️⃣</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="e6"
        options={{
          title: "E6",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>6️⃣</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="e7"
        options={{
          title: "E7",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>7️⃣</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="e8"
        options={{
          title: "E8",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>8️⃣</Text>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
