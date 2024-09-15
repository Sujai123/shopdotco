import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shopDotCoAxios from "../configs/shopDotCoAxios";


export const fetchStatistics = createAsyncThunk(
  'dashboard/fetchStatistics',
  async () => {
    const response = await shopDotCoAxios.get('dashboard')
    return response.data
  }
)

const initialState = {
  statistics: {},
  newArrivals: [],
  topSelling: [],
  browseByStyle: [],
  happyCustomers: []
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatistics.fulfilled, (state, action) => {
      state.statistics = action.payload.statistics;
      state.newArrivals = action.payload.newArrivals;
      state.topSelling = action.payload.topSelling;
      state.browseByStyle = action.payload.browseByStyle;
      state.happyCustomers = action.payload.happyCustomers;
    })
  }
})

export const dashboardActions = {
  ...dashboardSlice.actions,
  fetchStatistics
}

export default dashboardSlice.reducer