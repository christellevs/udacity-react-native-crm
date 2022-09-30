import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";

const Welcome = () => {
  const style = StyleSheet.create(styles());
  return (
    <View style={style.view}>
      <Text style={style.title}>Welcome to Customer Manager Plus!</Text>
      <Button text="Get Started" />
    </View>
  );
};

export default Welcome;
