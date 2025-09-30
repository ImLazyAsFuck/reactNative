import E2 from "@/components/E2";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const E2Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <E2 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default E2Screen;
