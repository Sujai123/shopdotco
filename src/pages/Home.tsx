import { Box } from "@mui/material";
import Hero from "../components/home/Hero";
import BrandList from "../components/home/BrandList";
import NewArrivals from "../components/home/NewArrivals";
import TopSelling from "../components/home/TopSelling";
import BrowseByStyle from "../components/home/BrowseByStyle";
import OurHappyCustomers from "../components/home/OurHappyCustomers";
import { useEffect } from "react";
import { dashboardActions } from "../redux/dashboardSlice";
import { useAppDispatch } from "../redux/store";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dashboardActions.fetchStatistics());
  }, [dispatch]);

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
