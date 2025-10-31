import SpinningLoading from "@/components/SpinningLoading";
import { StyleSheet, View } from "react-native";

export default function B3Layout() {
  return (
    <View style={styles.main}>
      <SpinningLoading />
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
