import { notification } from "@components/antDNotificationWithRedux";
import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import {
  combineReducers,
  configureStore,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseAPI } from "./api";
import appReducer, { clearToken } from "./reducers/app";
import userReducer, { logout } from "./reducers/users";
import { useTheme } from "@utils/hooks/useTheme";
import { PERSIST_KEY } from "@utils/constants";

interface Payload {
  status?: number;
  data?: {
    message?: string;
  };
}

const rootReducer = combineReducers({
  [baseAPI.reducerPath]: baseAPI.reducer,
  userReducer,
  appReducer,
  theme: useTheme.reducer,
});

const persistConfig = {
  key: PERSIST_KEY,
  version: 1,
  storage,
  blacklist: [baseAPI.reducerPath, "userReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action: unknown) => {
    const typedAction = action as { payload?: Payload };

    if (typedAction?.payload?.status === 401) {
      api.dispatch(logout());
      api.dispatch(clearToken());
      notification.open({
        type: "error",
        message:
          typedAction.payload?.data?.message ||
          "Sorry, something went wrong...",
        key: "global_error_msg",
      });
      return next(action);
    } else {
      if (isRejectedWithValue(typedAction)) {
        const isNotAllowed = typedAction.payload?.data?.message?.includes(
          "you are not allowed to",
        );
        if (!isNotAllowed) {
          notification.open({
            type: "error",
            message:
              typedAction.payload?.data?.message ||
              "Sorry, something went wrong...",
            key: "global_error_msg",
          });
        }
      }
    }

    return next(action);
  };

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(baseAPI.middleware, rtkQueryErrorLogger);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
