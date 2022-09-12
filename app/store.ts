import { configureStore } from "@reduxjs/toolkit";
import { kisilerApi } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [kisilerApi.reducerPath]: kisilerApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kisilerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
