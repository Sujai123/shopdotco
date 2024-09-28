import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shopDotCoAxios from "../configs/shopDotCoAxios";

interface DashboardData {
  status: "loading" | "finished" | "rejected";
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

const fetchStatistics = createAsyncThunk<DashboardData>(
  "dashboard/fetchStatistics",
  async () => {
    const response = await shopDotCoAxios.get("dashboard");
    return response.data;
  },
);

const initialState: DashboardData = {
  status: "loading",
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
    builder.addCase(fetchStatistics.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchStatistics.fulfilled, (state, action) => {
      const {
        statistics,
        newArrivals,
        topSelling,
        browseByStyle,
        happyCustomers,
      } = action.payload;

      state.status = "finished";

      Object.assign(state, {
        statistics,
        newArrivals,
        topSelling,
        browseByStyle,
        happyCustomers,
      });
    });
    builder.addCase(fetchStatistics.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export const dashboardActions = {
  ...dashboardSlice.actions,
  fetchStatistics,
};

export default dashboardSlice.reducer;
