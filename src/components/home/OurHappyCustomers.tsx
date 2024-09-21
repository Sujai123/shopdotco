import { Box, Stack, Typography } from "@mui/material";
import ReviewCard from "./ReviewCard";
import { useAppSelector } from "../../redux/store";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ReviewCardSkeleton from "./ReviewCardSkeleton";

const OurHappyCustomers = () => {
  const happyCustomers = useAppSelector(
    (state) => state.dashboard.happyCustomers,
  );
  const loader = useAppSelector((state) => state.dashboard.status);

  return (
    <Box>
      <Box>
        <Typography variant="h5" m={2}>
          Our Happy Customers
        </Typography>
      </Box>

      <Box m={4}>
        {loader === "loading" ? (
          <Stack direction={"row"} overflow={"auto"} gap={2}>
            {new Array(2).fill(null).map((_, index) => (
              <ReviewCardSkeleton key={index} />
            ))}
          </Stack>
        ) : (
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
        )}
      </Box>
    </Box>
  );
};

export default OurHappyCustomers;
