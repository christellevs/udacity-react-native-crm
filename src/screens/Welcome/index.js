import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";

const Welcome = () => {
  const style = StyleSheet.create(styles());
  const navigation = useNavigation();

  return (
    <View style={style.view}>
      <Text style={style.title}>Welcome to Customer Manager Plus!</Text>
      <Button
        onPress={() => navigation.navigate("List of Regions")}
        text="Get Started"
      />
    </View>
  );
};

export default Welcome;
