import { createSlice } from "@reduxjs/toolkit";


const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: [],
  reducers: {
    fetchStatistics(state, action) {
      state.statistics = { hi: 123 }
    }
  }
})

export const dashboardActions = dashboardSlice.actions;