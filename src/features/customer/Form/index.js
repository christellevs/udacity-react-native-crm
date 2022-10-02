import React from "react";
import { View, TextInput, Text } from "react-native";
import { useUpdateFields, useNewCustomer } from "..//hooks";
import Button from "../../../components/Button";
import Switch from "../Switch";
import DropdownComponent from "../Dropdown";
import styles from "./styles";

const Form = () => {
  const { fields, setFormField } = useUpdateFields();
  const { onSubmit } = useNewCustomer();
  const [value, onChangeText] = React.useState("");

  console.log(setFormField);

  const { firstName, lastName, active, region } = fields;

  return (
    <View>
      <TextInput
        key={"firstName"}
        placeholder="First Name..."
        value={firstName || ""}
        style={styles.textInput}
        onChangeText={(v) => setFormField("firstName", v)}
      />
      <TextInput
        key={"lastName"}
        placeholder="Last Name..."
        value={lastName || ""}
        style={styles.textInput}
        onChangeText={(v) => setFormField("lastName", v)}
      />
      <View>
        <Text>Active: </Text>
        <Switch setFormField={setFormField} />
      </View>
      <DropdownComponent setFormField={setFormField} />

      <Button onPress={onSubmit} text="Submit" />
    </View>
  );
};

export default Form;
