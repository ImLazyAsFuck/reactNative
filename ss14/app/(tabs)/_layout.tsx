import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#08f",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",
          tabBarIcon({ color }) {
            return <FontAwesome name="home" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="positions"
        options={{
          title: "Vị trí",
          headerShown: false,
          tabBarIcon({ color }) {
            return <FontAwesome name="map-marker" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Tài khoản",
          tabBarIcon({ color }) {
            return <FontAwesome name="user" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
