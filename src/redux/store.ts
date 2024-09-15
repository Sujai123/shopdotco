import { configureStore } from '@reduxjs/toolkit'
import dashboardSlice from './dashboardSlice'
import logger from 'redux-logger';


export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})