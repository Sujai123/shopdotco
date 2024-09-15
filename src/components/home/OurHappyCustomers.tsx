import { Box, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import ReviewCard from "./ReviewCard";
import { useSelector } from "react-redux";

const OurHappyCustomers = () => {
  const happyCustomers = useSelector((state) => state.dashboard.happyCustomers);
  return (
    <Box>
      <Box>
        <Typography variant="h5" ml={2}>
          Our Happy Customers
        </Typography>
        {/* <Toolbar>

        </Toolbar> */}
      </Box>

      <Box m={4}>
        <Stack direction={"row"} gap={1}>
          {happyCustomers.map((each) => (
            <ReviewCard
              name={each.name}
              comment={each.comment}
              rating={each.rating}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default OurHappyCustomers;
