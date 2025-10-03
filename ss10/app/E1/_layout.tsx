import { Stack } from "expo-router";
import React from "react";

export default function E1TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" />
    </Stack>
  );
}
