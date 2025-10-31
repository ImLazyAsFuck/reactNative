import Toast from "@/components/Toast";
import { StyleSheet, View } from "react-native";

export default function B8Layout() {
  return (
    <View style={styles.main}>
      <Toast />
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
