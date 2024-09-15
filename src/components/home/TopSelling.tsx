import {
  Typography,
  Box,
  Stack,
  Button,
  styled,
  useTheme,
  Paper,
} from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import newArrivals from "../../dynamicConstants/newArrivals";
import { useSelector } from "react-redux";

const TopSelling = () => {
  const topSelling = useSelector((state) => state.dashboard.topSelling);
  return (
    <Box>
      <Typography variant="h5" textAlign={"center"} padding={2}>
        Top Selling
      </Typography>
      <Box p={2}>
        <Stack direction={"row"} overflow={"auto"} gap={2}>
          {topSelling.map((arrival) => (
            <ProductCard
              key={arrival.id}
              imgSrc={arrival.imgSrc}
              title={arrival.title}
              rating={arrival.rating}
              price={arrival.price}
              offerPrice={arrival.offerPrice}
              offerPercentage={arrival.offerPercentage}
            />
          ))}
        </Stack>
      </Box>

      <Box textAlign={"center"}>
        <Button variant="outlined">View More</Button>
      </Box>
    </Box>
  );
};

export default TopSelling;
