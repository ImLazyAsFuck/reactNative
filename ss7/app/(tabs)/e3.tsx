import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import E3 from "../../components/E3";

const E3Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <E3 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default E3Screen;
