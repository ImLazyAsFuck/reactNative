import { useLocalSearchParams } from "expo-router";
import React, { use, useEffect } from "react";
import { View } from "react-native";

export default function PositionDetail() {
  const { id } = useLocalSearchParams();

  useEffect(() => {
    
  }, []);
  return <View></View>;
}

const styles = {
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
};
