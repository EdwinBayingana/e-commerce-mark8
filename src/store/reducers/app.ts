import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  token?: string;
  activeUserId?: number;
  activeUserName?: string;
} = {
  token: undefined,
  activeUserId: undefined,
  activeUserName: undefined,
};

export const appSlice = createSlice({
  name: 'token',
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
    setActiveUserId(state, action: PayloadAction<number | undefined>) {
      state.activeUserId = action.payload;
    },
  },
});

export const { setToken, clearToken, setActiveUserId, setActiveUserName } =
  appSlice.actions;

export default appSlice.reducer;
