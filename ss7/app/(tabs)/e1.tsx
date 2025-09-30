import E1 from "@/components/E1";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const E1Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <E1 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default E1Screen;
