import Counter from "@/components/Counter";
import E1 from "@/components/E1";
import E2 from "@/components/E2";
import E4 from "@/components/E4";
import E5 from "@/components/E5";
import E6n7 from "@/components/E6n7";
import E8 from "@/components/E8";
import E9 from "@/components/E9";
import E10 from "@/components/E10";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <E1 />
        <E2 />
        <Counter />
        <E4 />
        <E5 />
        <E6n7 />
        <E8 />
        <E9 />
        <E10 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RootLayout;
