import E7 from "@/components/E7";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const E7Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <E7 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default E7Screen;
