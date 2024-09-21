import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { useAppSelector } from "../../redux/store";
import ProductCardSkeleton from "./ProductCardSkeleton";

const NewArrivals = () => {
  const loader = useAppSelector((state) => state.dashboard.status);
  const newArrivals = useAppSelector((state) => state.dashboard.newArrivals);

  if (loader === "loading") {
    return (
      <Box>
        <Stack direction={"row"} overflow={"auto"} gap={2}>
          {new Array(5).fill(null).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </Stack>
      </Box>
    );
  }
  return (
    <Box mx={2}>
      <Box>
        <Stack direction={"row"} overflow={"auto"} gap={2}>
          {newArrivals.map((arrival) => (
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

      <Box textAlign={"center"} mt={2}>
        <Button color={"primary"} variant="outlined">
          View More
        </Button>
      </Box>
    </Box>
  );
};

export default NewArrivals;
