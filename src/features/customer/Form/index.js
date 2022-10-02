import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useUpdateFields, useNewCustomer } from "..//hooks";
// import formStyles from "./styles";

const Form = ({ disabled = false }) => {
  // const styles = StyleSheet.create(formStyles());
  const { fields, setFormField } = useUpdateFields();
  const { onSubmit } = useNewCustomer();
  const [value, onChangeText] = React.useState("");

  console.log();

  console.log(setFormField);
  // const {
  //     common_name,
  //     scientific_name,
  //     description,
  //     endangered_status,
  //     population,
  //     invasive
  // } = fields

  const { firstName, lastName } = fields;

  return (
    <View>
      <View></View>

      <TextInput
        key={"firstName"}
        placeholder="First Name"
        value={firstName || ""}
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={(v) => setFormField("firstName", v)}
      />

      <View style={{ height: 15, width: "100%" }}></View>

      <TextInput
        key={"lastName"}
        placeholder="Last Name"
        value={lastName || ""}
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={(v) => setFormField("lastName", v)}
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
