import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface UserInfo {
  id: number;
  name: string;
  image: string;
  email: string;
}

const UserInfoCard = ({ user }: { user: UserInfo }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    boxShadow: "1px 1px 1px 1px #0000001a",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  email: {
    fontSize: 12,
    color: "#666",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserInfoCard;
