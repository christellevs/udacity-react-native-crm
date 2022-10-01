import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

const Welcome = () => {
  const style = StyleSheet.create(styles());
  // const navigation = useNavigation();

  return (
    <View style={style.view}>
      <Text style={style.title}>Customers Listed by region</Text>
    </View>
  );
};

export default Welcome;
