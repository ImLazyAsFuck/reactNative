import { Stack } from "expo-router";
import React from "react";

export default function E4TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" />
      <Stack.Screen name="ProductDetail" options={{ headerShown: true }} />
    </Stack>
  );
}