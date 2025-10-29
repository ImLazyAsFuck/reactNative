import AddButton from "@/components/AddButton";
import { Stack } from "expo-router";
import React from "react";

const ProductsLayout = () => {
  return (
    <Stack screenOptions={{ animation: "slide_from_right" }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Danh sách sản phẩm",
          headerRight: () => <AddButton />,
        }}
      />
    </Stack>
  );
};

export default ProductsLayout;
