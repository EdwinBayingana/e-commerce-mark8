import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
    },
    updateUser: (state, action: PayloadAction<any>) => {
      const { payload } = action;
      state.user = payload;
    },
  },
});

export const { updateUser, logout } = userSlice.actions;

export default userSlice.reducer;
