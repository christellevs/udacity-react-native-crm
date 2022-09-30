import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";

const NewCustomer = () => {
  const style = StyleSheet.create(styles());
  return (
    <View style={style.view}>
      <Text style={style.title}>New Customer Form</Text>
    </View>
  );
};

export default NewCustomer;
