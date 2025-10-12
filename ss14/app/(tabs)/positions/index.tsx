import { getPositions } from "@/apis/position.apis";
import PositionItem from "@/components/PositionItem";
import { Position } from "@/interfaces/position.interface";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Positions() {
  const [positions, setPositions] = useState<Position[]>([]);

  const fetchPositions = async () => {
    const response = await getPositions();
    console.log(response.data);
    setPositions(response.data);
  };

  useEffect(() => {
    const load = async () => {
      try {
        await fetchPositions();
      } catch (error) {
        console.error("Failed to fetch positions:", error);
      }
    };
    load();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={positions}
        renderItem={({ item }) => {
          return (
            <PositionItem fetchPositions={fetchPositions} position={item} />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={fetchPositions}
        refreshing={false}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No positions available</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "gray",
  },
  list: {
    gap: 10,
    flexDirection: "column",
  },
});
