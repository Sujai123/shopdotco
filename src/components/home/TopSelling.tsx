import { Box, Button, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { useAppSelector } from "../../redux/store";
import ProductCardSkeleton from "./ProductCardSkeleton";
import SlideUpComponent from "../../hocs/SlideUpComponent";

const TopSelling = () => {
  const topSelling = useAppSelector((state) => state.dashboard.topSelling);
  const loader = useAppSelector((state) => state.dashboard.status);

  if (loader === "loading") {
    return (
      <Box mx={2}>
        <Stack direction={"row"} overflow={"auto"} gap={2}>
          {new Array(5).fill(null).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </Stack>
      </Box>
    );
  }
  return (
    <Box>
      <Box mx={2}>
        <Stack direction={"row"} overflow={"auto"} gap={2}>
          {topSelling.map((arrival) => (
            <SlideUpComponent key={arrival.id}>
              <ProductCard
                key={arrival.id}
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
        <Button variant="outlined">View More</Button>
      </Box>
    </Box>
  );
};

export default TopSelling;
