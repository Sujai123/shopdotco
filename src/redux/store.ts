import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboardSlice";
import logger from "redux-logger";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === `development`) {
      return getDefaultMiddleware().concat(logger);
    }

    return getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
