import { createSlice } from "@reduxjs/toolkit";

const name = "customer";

const initialState = {
  list: {
    customers: [],
  },
  form: {
    fields: {
      firstName: null,
      lastName: null,
      active: false,
    },
  },
};

const reducers = {
  createCustomer: (state) => {
    // nothing happens here yet
  },
  createCustomerResult: (state, { payload }) => {
    state.list.customers = payload;
  },
  createCustomerError: (state, { payload }) => {
    // nothing happens here yet
  },
  createCustomerReset: (state) => {
    // nothing happens here yet
  },
  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;

    const fields = {
      ...current,
      [field]: value,
    };

    state.form.fields = fields;
  },
  loadCustomers: (state) => {
    // state.status =
  },
  loadResult: (state, { payload }) => {
    state.list.customers = payload;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createCustomer,
  createCustomerResult,
  createCustomerError,
  createCustomerReset,
  setFormField,
  loadCustomers,
  loadResult,
} = slice.actions;

export default slice.reducer;
