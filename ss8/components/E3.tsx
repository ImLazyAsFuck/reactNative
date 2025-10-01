import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const E3 = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = async () => {
    await AsyncStorage.setItem("count", JSON.stringify(count + 1));
    setCount(count + 1);
  };

  const handleDecrement = async () => {
    await AsyncStorage.setItem("count", JSON.stringify(count - 1));
    setCount(count - 1);
  };

  useEffect(() => {
    const loadCount = async () => {
      try{
        const savedCount = await AsyncStorage.getItem("count");
        if(savedCount){
          const parsedCount = JSON.parse(savedCount) || 0;
          setCount(parseInt(parsedCount));
        }
      }catch(error){
        console.error("Error loading count:", error);
      }
    };
    loadCount();
  }, [count]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleIncrement()}>
            <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDecrement()}>
            <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 120,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  buttonText: {
    color: "white",
  },
});

export default E3;
