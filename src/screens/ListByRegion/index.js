import React from "react";
import { SafeAreaView } from "react-native";
import List from "../../features/customer/List";
import styles from "./styles";

const ListByRegion = () => (
  <SafeAreaView style={styles.view}>
    <List />
  </SafeAreaView>
);

export default ListByRegion;
