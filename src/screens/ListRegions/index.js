import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";
import { regions } from "../../utils/helpers";

const ListRegions = () => {
  const navigation = useNavigation();
  console.log(regions);

  const renderRegions = ({ item }) => (
    <View>
      <Button
        onPress={() => navigation.navigate("List by Region")}
        text={item.name}
      />
    </View>
  );
  return (
    <SafeAreaView style={styles.view}>
      <Button
        onPress={() => navigation.navigate("New Customer Form")}
        text="Create Customer"
      />
      <Text style={styles.title}>List of Regions:</Text>
      <FlatList
        data={regions}
        renderItem={renderRegions}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ListRegions;
