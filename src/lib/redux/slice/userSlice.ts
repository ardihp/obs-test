import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "types/user";

interface UserState {
  list: User[];
  detail: User;
}

const initialState: UserState = {
  list: [],
  detail: {
    id: 0,
    name: "",
    username: "",
    company: {
      name: "",
      catchPhrase: "",
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setListUser: (state, action: PayloadAction<User[]>) => {
      state.list = action.payload;
    },
    setDetailUser: (state, action: PayloadAction<User>) => {
      state.detail = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.list = state.list?.filter((user) => user?.id !== action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.list = state.list?.map((user) => {
        if (user?.id === action.payload?.id) {
          return action.payload;
        } else {
          return user;
        }
      });
    },
    createUser: (state, action: PayloadAction<User>) => {
      state.list = [action.payload, ...state.list];
    },
  },
});

export const {
  setListUser,
  setDetailUser,
  deleteUser,
  updateUser,
  createUser,
} = userSlice.actions;

export default userSlice.reducer;
