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
import Shirt1 from "../../assets/dynamicImages/shirt1.png";
import newArrivals from "../../dynamicConstants/newArrivals";

const TopSelling = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h5" textAlign={"center"} padding={2}>
        Top Selling
      </Typography>
      <Box p={2}>
        <Stack direction={"row"} overflow={"auto"} gap={2}>
          {newArrivals.map((arrival) => (
            <ProductCard
              imgSrc={arrival.imgSrc}
              title={arrival.title}
              rating={arrival.rating}
              price={arrival.price}
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
