import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveBackgroundColor: "#04f" }}>
      <Tabs.Screen name="e1" options={{ title: "Bài 1" }} />
    </Tabs>
  );
};

export default TabLayout;
