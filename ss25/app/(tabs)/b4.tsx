import ProgressBar from "@/components/ProgressBar";
import { StyleSheet, View } from "react-native";

export default function B4Layout() {
  return (
    <View style={styles.main}>
      <ProgressBar />
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
