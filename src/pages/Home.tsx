import { Box, Typography } from "@mui/material"
import Hero from "../components/home/Hero"
import BrandList from "../components/home/BrandList"
import NewArrivals from "../components/home/NewArrivals"
import TopSelling from "../components/home/TopSelling"
import BrowseByStyle from "../components/home/BrowseByStyle"

const Home = () => {
  return (
    <Box>
      <Hero />
      <BrandList />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
    </Box>
  )
}

export default Home