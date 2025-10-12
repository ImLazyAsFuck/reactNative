import { deletePosition } from "@/apis/position.apis";
import { Position } from "@/interfaces/position.interface";
import { FontAwesome } from "@expo/vector-icons";
import { RelativePathString, router } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PositionItemProps {
  position: Position;
  fetchPositions?: () => void;
}

export default function PositionItem({ position, fetchPositions }: PositionItemProps) {
  const handleDelete = (id: number) => {
    try {
      Alert.alert(
        "Confirm Deletion",
        "Are you sure you want to delete this position?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Delete",
            style: "destructive",
            onPress: () => {
              deletePosition(id);
              fetchPositions && fetchPositions();
            },
          },
        ]
      );
    } catch (error) {
      console.error("Failed to delete position:", error);
    }
  };
  return (
    <TouchableOpacity
      onPress={() =>
        router.push(`/positions/${position.id}` as RelativePathString)
      }
    >
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.title}>{position.positionName}</Text>
          <View
            style={[
              styles.status,
              {
                backgroundColor:
                  position.positionStatus === "ACTIVE" ? "green" : "red",
              },
            ]}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {position.positionStatus === "ACTIVE"
                ? "Đang hoạt động"
                : "Ngừng hoạt động"}
            </Text>
          </View>
        </View>
        <View style={styles.action}>
          <TouchableOpacity
            onPress={() => {
              router.push(
                `/postitions/edit/${position.id}` as RelativePathString
              );
            }}
          >
            <FontAwesome name="pencil" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleDelete(position.id);
            }}
          >
            <FontAwesome name="trash" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 15,
    backgroundColor: "white",
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  info: {
    width: "50%",
    flexDirection: "column",
    gap: 5,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 50,
    width: "60%",
  },
  action: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
