import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";
import { regions } from "../../utils/helpers";

const ListRegions = () => {
  const navigation = useNavigation();
  console.log(regions);
  return (
    <View style={styles.view}>
      <Button
        onPress={() => navigation.navigate("New Customer Form")}
        text="Create Customer"
      />
      <Text style={styles.title}>List of Regions:</Text>
      {regions.map((region) => (
        <Button
          key={region.id}
          onPress={() => navigation.navigate("List by Region")}
          text={region.name}
        />
      ))}
    </View>
  );
};

export default ListRegions;
