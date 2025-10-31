import FadePressable from "@/components/FadePressable";
import { StyleSheet, View } from "react-native";

export default function B7Layout() {
  return (
    <View style={styles.main}>
      <FadePressable />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
