import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shopDotCoAxios from "../configs/shopDotCoAxios";

interface DashboardData {
  statistics: {
    brandsCount: number;
    productsCount: number;
    customersCount: number;
  };
  newArrivals: {
    id: number;
    imgSrc: string;
    title: string;
    rating: 1 | 2 | 3 | 4 | 5;
    price: number;
    offerPrice?: number;
    offerPercentage?: string;
  }[];
  topSelling: {
    id: number;
    imgSrc: string;
    title: string;
    rating: 1 | 2 | 3 | 4 | 5;
    price: number;
    offerPrice?: number;
    offerPercentage?: string;
  }[];
  browseByStyle: {
    id: number;
    title: string;
    imgSrc: string;
  }[];
  happyCustomers: {
    id: number;
    name: string;
    comment: string;
    rating: 1 | 2 | 3 | 4 | 5;
  }[];
}

export const fetchStatistics = createAsyncThunk<DashboardData>(
  "dashboard/fetchStatistics",
  async () => {
    const response = await shopDotCoAxios.get("dashboard");
    return response.data;
  },
);

const initialState: DashboardData = {
  statistics: {
    brandsCount: 0,
    productsCount: 0,
    customersCount: 0,
  },
  newArrivals: [],
  topSelling: [],
  browseByStyle: [],
  happyCustomers: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatistics.fulfilled, (state, action) => {
      state.statistics = action.payload.statistics;
      state.newArrivals = action.payload.newArrivals;
      state.topSelling = action.payload.topSelling;
      state.browseByStyle = action.payload.browseByStyle;
      state.happyCustomers = action.payload.happyCustomers;
    });
  },
});

export const dashboardActions = {
  ...dashboardSlice.actions,
  fetchStatistics,
};

export default dashboardSlice.reducer;
