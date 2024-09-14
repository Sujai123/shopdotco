import {
  Typography,
  Box,
  Stack,
  Button,
  styled,
  useTheme,
  IconButton,
} from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import Shirt1 from "../../assets/dynamicImages/shirt1.png";
import newArrivals from "../../dynamicConstants/newArrivals";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  width: "100%",
  borderRadius: "100vh",
  [theme.breakpoints.up("sm")]: {
    width: "20%",
  },
}));

const NewArrivals = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h5" textAlign={"center"} padding={2}>
        New Arrivals
      </Typography>
      <Box>
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

      <Box textAlign={"center"} mt={2}>
        <StyledButton color={'primary'} variant="outlined">
          {/* <Typography fontWeight={"bold"} textTransform={"capitalize"}> */}
            View More
          {/* </Typography> */}
        </StyledButton>
      </Box>
    </Box>
  );
};

export default NewArrivals;
