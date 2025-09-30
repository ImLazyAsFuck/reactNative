import E5 from "@/components/E5";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const E5Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <E5 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default E5Screen;
