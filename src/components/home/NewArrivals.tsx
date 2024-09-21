import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { useAppSelector } from "../../redux/store";
import ProductCardSkeleton from "./ProductCardSkeleton";
import FadedComponent from "../../hocs/FadedComponent";
import SlideUpComponent from "../../hocs/SlideUpComponent";

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
            <SlideUpComponent key={arrival.id}>
              <ProductCard
                imgSrc={arrival.imgSrc}
                title={arrival.title}
                rating={arrival.rating}
                price={arrival.price}
                offerPrice={arrival.offerPrice}
                offerPercentage={arrival.offerPercentage}
              />
            </SlideUpComponent>
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
