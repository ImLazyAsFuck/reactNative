import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import E4 from "../../components/E4";

const E4Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <E4 />
      </ScrollView>
    </SafeAreaView>
  );
};
export default E4Screen;
