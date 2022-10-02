import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";
import Form from "../../features/customer/Form";

const NewCustomer = () => {
  const style = StyleSheet.create(styles());
  return (
    <View style={style.view}>
      <Text style={style.title}>New Customer Form</Text>
      <Form />
    </View>
  );
};

export default NewCustomer;
