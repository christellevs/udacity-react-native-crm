import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";
import Form from "../../features/customer/Form";

const NewCustomer = () => {
  const style = StyleSheet.create(styles());
  return (
    <SafeAreaView style={style.view}>
      <ScrollView>
        <Text style={style.title}>New Customer Form</Text>
        <Form />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewCustomer;
