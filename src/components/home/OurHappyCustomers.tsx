import { Box, Stack, Typography } from "@mui/material";
import ReviewCard from "./ReviewCard";
import { useAppSelector } from "../../redux/store";

const OurHappyCustomers = () => {
  const happyCustomers = useAppSelector(
    (state) => state.dashboard.happyCustomers,
  );
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
              key={each.id}
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
