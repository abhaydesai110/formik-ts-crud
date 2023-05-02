import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterProps } from "../Pages/Register.model";
import PersonServices from "../Redux/services/PersonServices";

export const registerUser: any = createAsyncThunk(
  "person/register",
  async (data: RegisterProps) => {
    return PersonServices.register(data);
  }
);

export const deleteUser: any = createAsyncThunk(
  "person/delete",
  async (id: number) => {
    return PersonServices.deleteUser(id);
  }
);

export const getPersonData: any = createAsyncThunk(
  "person/getData",
  async (id: number) => {
    return PersonServices.getPersonData(id);
  }
);

export const getAllPersonData: any = createAsyncThunk(
  "person/getAllData",
  async () => {
    const data = await PersonServices.getAllPersonData();
    return data;
  }
);

export const updateUser: any = createAsyncThunk(
  "person/updateData",
  async (data: RegisterProps) => {
    return await PersonServices.updateUser(data);
  }
);
