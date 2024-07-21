import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  token?: string;
  activeUserName?: string;
  activeUserEmail?: string;
} = {
  token: undefined,
  activeUserName: undefined,
  activeUserEmail: undefined,
};

export const appSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | undefined>) => {
      const { payload } = action;
      state.token = payload;
    },
    clearToken: (state) => {
      state.token = undefined;
    },
    setActiveUserName(state, action: PayloadAction<string | undefined>) {
      state.activeUserName = action.payload;
    },
    setActiveUserEmail(state, action: PayloadAction<string | undefined>) {
      state.activeUserEmail = action.payload;
    },
  },
});

export const { setToken, clearToken, setActiveUserEmail, setActiveUserName } =
  appSlice.actions;

export default appSlice.reducer;
