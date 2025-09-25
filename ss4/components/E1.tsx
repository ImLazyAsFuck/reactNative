import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserInfoCard from "./UserInfoCard";

interface UserInfo {
  id: number;
  name: string;
  image: string;
  email: string;
}

const E1P = () => {
  const [usersInfor, setUsersInfor] = useState<UserInfo[]>([
    {
      id: 1,
      name: "Trần Văn An",
      image: "https://i.pravatar.cc/150?u=1",
      email: "tran.an@example.com",
    },
    {
      id: 2,
      name: "Lý Thị Bình",
      email: "ly.binh@example.com",
      image: "https://i.pravatar.cc/150?u=2",
    },
  ]);
  return (
    <View>
      <Text style={styles.title}>Bài 1:</Text>
      <View style={styles.container}>
        {usersInfor.map((user) => (
          <UserInfoCard key={user.id} user={user} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default E1P;
