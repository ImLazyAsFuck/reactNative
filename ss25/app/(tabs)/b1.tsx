import Like from "@/components/Like";
import { StyleSheet, View } from "react-native";

export default function B1Layout() {
  return (
    <View style={styles.main}>
      <Like />
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
