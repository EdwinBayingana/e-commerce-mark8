import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
