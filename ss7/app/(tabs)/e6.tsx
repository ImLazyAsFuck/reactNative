import E6 from "@/components/E6";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const E6Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <E6 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default E6Screen;
