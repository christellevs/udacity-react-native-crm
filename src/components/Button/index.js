import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./styles";

const Button = ({ text, onPress }) => {
  const style = StyleSheet.create(styles());

  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
