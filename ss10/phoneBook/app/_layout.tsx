import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import ProductsProvider from "./ProductsProvider";

const RootLayout = () => {
  return (
    <ProductsProvider>
      <Tabs>
        <Tabs.Screen
          name="Home"
          options={{
            title: "Trang chủ",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Products"
          options={{
            title: "Sản phẩm",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Tài khoản",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="product-detail"
          options={{
            headerShown: false,
            href: null,
          }}
        />
        <Tabs.Screen
          name="edit-product"
          options={{
            headerShown: false,
            href: null,
          }}
        />
        <Tabs.Screen
          name="ProductsProvider"
          options={{
            headerShown: false,
            href: null,
          }}
        />
      </Tabs>
    </ProductsProvider>
  );
};

export default RootLayout;
