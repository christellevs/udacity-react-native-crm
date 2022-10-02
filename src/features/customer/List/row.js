import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Row = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate("Edit", { customerID: item.id })}>
      <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
        <Text key={"id"}>ID: {item.id}</Text>
        <Text key={"fn"}>First Name: {item.firstName}</Text>
        <Text key={"ln"}>Last Name: {item.lastName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
