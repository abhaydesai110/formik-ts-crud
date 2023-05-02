import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPersonInitialState } from "./Person.model";
// import { RegisterProps } from "../Pages/Register.model";
// import PersonServices from "../Redux/services/PersonServices";
import {
  deleteUser,
  registerUser,
  getPersonData,
  getAllPersonData,
  updateUser,
} from "./Person.action";
// import { deleteUser } from "./Person.action";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: IPersonInitialState = {
  registerInitialState: {
    loading: false,
    hasError: false,
    data: null,
  },
  deleteInitialState: {
    loading: false,
    hasError: false,
    data: null,
  },
  getPersonInitialState: {
    loading: false,
    hasError: false,
    data: null,
  },
  getAllPersonInitialState: {
    loading: false,
    hasError: false,
    data: null,
  },
  updateInitialState: {
    loading: false,
    hasError: false,
    data: null,
  },
  values: 0
};

const registerServices = createAsyncThunk

const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    increment: (state) => {
      state.values++
    },
  },
  extraReducers: {
    [registerUser.pending.type]: (state) => {
      state.registerInitialState.loading = true;
    },
    [registerUser.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.registerInitialState.data = action.payload;
      state.registerInitialState.loading = false;
      state.registerInitialState.hasError = false;
    },
    [registerUser.rejected.type]: (state) => {
      state.registerInitialState.loading = false;
      state.registerInitialState.hasError = true;
    },
    [getAllPersonData.pending.type]: (state) => {
      state.getAllPersonInitialState.loading = true;
    },
    [getAllPersonData.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.getAllPersonInitialState.data = action.payload;
      state.getAllPersonInitialState.loading = false;
      state.getAllPersonInitialState.hasError = false;
    },
    [getAllPersonData.rejected.type]: (state) => {
      state.getAllPersonInitialState.loading = false;
      state.getAllPersonInitialState.hasError = true;
    },
    [getPersonData.pending.type]: (state) => {
      state.getPersonInitialState.loading = true;
    },
    [getPersonData.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.getPersonInitialState.data = action.payload;
      state.getPersonInitialState.loading = false;
      state.getPersonInitialState.hasError = false;
    },
    [getPersonData.rejected.type]: (state) => {
      state.getPersonInitialState.loading = false;
      state.getPersonInitialState.hasError = true;
    },
    [deleteUser.pending.type]: (state) => {
      state.deleteInitialState.loading = true;
    },
    [deleteUser.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.deleteInitialState.data = action.payload;
      state.deleteInitialState.loading = false;
      state.deleteInitialState.hasError = false;
    },
    [deleteUser.rejected.type]: (state) => {
      state.deleteInitialState.loading = false;
      state.deleteInitialState.hasError = true;
    },
    [updateUser.pending.type]: (state) => {
      state.updateInitialState.loading = true;
    },
    [updateUser.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.updateInitialState.data = action.payload;
      state.updateInitialState.loading = false;
      state.updateInitialState.hasError = false;
    },
    [updateUser.rejected.type]: (state) => {
      state.updateInitialState.loading = false;
      state.updateInitialState.hasError = true;
    },
  },
});

export const increment = PersonSlice.actions;
export default PersonSlice.reducer;
export const selectUser = (state: any) => state.personStore;
