import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "types/user";

interface UserState {
  list: User[];
}

const initialState: UserState = {
  list: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User[]>) => {
      state.list = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.list = state.list?.filter((user) => user?.id !== action.payload);
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
