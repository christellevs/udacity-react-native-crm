import React from "react";
import { useRoute } from "@react-navigation/native";
import { useEditCustomer } from "../hooks";
import Form from "../Form";

const Edit = () => {
  const { params } = useRoute();
  const { customerID } = params;
  const { status, onSubmit } = useEditCustomer(customerID);

  return <Form handleSubmit={onSubmit} status={status} animalID={customerID} />;
};

export default Edit;
