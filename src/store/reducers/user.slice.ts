import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../../actions/userAction";
import { IUser } from "../../models/IUser";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  errorMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //*****************REACT-REDUX*******************//
    // userFetching: (state): void => {
    //   state.isLoading = true;
    // },
    // userFetchingSucces: (state, action: PayloadAction<IUser[]>): void => {
    //   state.isLoading = false;
    //   state.errorMessage = "";
    //   state.users = action.payload;
    // },
    // userFetchingError: (state, action: PayloadAction<string>): void => {
    //   state.isLoading = false;
    //   state.errorMessage = action.payload;
    // },
  },
  extraReducers: {
    //**************REDUX-TOOLKIT****************//
    [fetchUsers.fulfilled.type]: (
      state,
      action: PayloadAction<IUser[]>
    ): void => {
      state.isLoading = false;
      state.errorMessage = "";
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state): void => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (
      state,
      action: PayloadAction<string>
    ): void => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
