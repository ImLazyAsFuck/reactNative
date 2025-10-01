import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="e1n4" options={{ title: "Bài 1 và 4" }} />
      <Tabs.Screen name="e2" options={{ title: "Bài 2" }} />
      <Tabs.Screen name="e3" options={{ title: "Bài 3" }} />
      <Tabs.Screen name="e5" options={{ title: "Bài 5" }} />
      <Tabs.Screen name="e6" options={{ title: "Bài 6" }} />
      <Tabs.Screen name="e7" options={{ title: "Bài 7" }} />
      <Tabs.Screen name="e8" options={{ title: "Bài 8" }} />
    </Tabs>
  );
};

export default _layout;
