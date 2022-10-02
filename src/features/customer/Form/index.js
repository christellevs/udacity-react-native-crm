import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useUpdateFields, useNewCustomer } from "..//hooks";
import Button from "../../../components/Button";
import style from "./styles";

const Form = ({ disabled = false }) => {
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
      <TextInput
        key={"firstName"}
        placeholder="First Name..."
        value={firstName || ""}
        style={style.textInput}
        onChangeText={(v) => setFormField("firstName", v)}
      />
      <TextInput
        key={"lastName"}
        placeholder="Last Name..."
        value={lastName || ""}
        style={style.textInput}
        onChangeText={(v) => setFormField("lastName", v)}
      />

      <Button onPress={onSubmit} text="Submit" />
    </View>
  );
};

export default Form;
