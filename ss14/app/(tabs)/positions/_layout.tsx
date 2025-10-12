import AddButton from "@/components/AddButton";
import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Vị trí", headerRight(props) {
        return <AddButton />
      }, }} />
      <Stack.Screen name="[id]" options={{ title: "Chi tiết vị trí" }} />
      <Stack.Screen name="add" options={{ title: "Thêm vị trí mới" }} />
    </Stack>
  );
}
