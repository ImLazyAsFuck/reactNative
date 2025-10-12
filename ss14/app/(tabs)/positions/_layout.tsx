import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Vị trí" }} />
      <Stack.Screen name="[id]" />
      <Stack.Screen name="add" />
    </Stack>
  );
}
