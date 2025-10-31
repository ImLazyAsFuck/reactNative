import ToggleWidth from "@/components/ToggleWidth";
import { StyleSheet, View } from "react-native";

export default function B2Layout() {
  return (
    <View style={styles.main}>
      <ToggleWidth />
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
