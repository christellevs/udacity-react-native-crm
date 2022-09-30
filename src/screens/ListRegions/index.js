import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";

const ListRegions = () => {
  const style = StyleSheet.create(styles());
  const navigation = useNavigation();
  return (
    <View style={style.view}>
      <Button
        onPress={() => navigation.navigate("New Customer Form")}
        text="Create Customer"
      />
      <Text style={style.title}>List of Regions:</Text>
    </View>
  );
};

export default ListRegions;
