import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useListCustomers } from "../hooks";
import Row from "./row";

const List = () => {
  const { navigate } = useNavigation();
  const customers = useListCustomers();

  return (
    <View>
      <Text>Customers List</Text>

      {customers && customers.length > 0 ? (
        <FlatList
          data={customers || []}
          renderItem={(props) => <Row {...props} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <>
          <Text>{"No Customers"}</Text>
          <Button
            title={"Add Customer"}
            onPress={() => {
              navigate("Add Customer");
            }}
          />
        </>
      )}
    </View>
  );
};

export default List;
