import { AppDispatch } from "../store/store";
import axios from "axios";
import { IUser } from "../models/IUser";
import { userSlice } from "../store/reducers/user.slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   const { userFetching, userFetchingError, userFetchingSucces } =
//     userSlice.actions;

//   try {
//     dispatch(userFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/user1s"
//     );
//     dispatch(userFetchingSucces(response.data));
//   } catch (e) {
//     dispatch(userFetchingError("error"));
//   }
// };

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users1"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Something went wrong....");
    }
  }
);
