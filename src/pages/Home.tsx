import { Box, Typography } from "@mui/material";
import Hero from "../components/home/Hero";
import BrandList from "../components/home/BrandList";
import NewArrivals from "../components/home/NewArrivals";
import TopSelling from "../components/home/TopSelling";
import BrowseByStyle from "../components/home/BrowseByStyle";
import OurHappyCustomers from "../components/home/OurHappyCustomers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../redux/dashboardSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dashboardActions.fetchStatistics());
  }, []);

  return (
    <Box>
      <Hero />
      <BrandList />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <OurHappyCustomers />
    </Box>
  );
};

export default Home;
