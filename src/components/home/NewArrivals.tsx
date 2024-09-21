import {
  Box,
  Button,
  Skeleton,
  Stack,
  Typography,
  Container,
} from "@mui/material";
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
    <Container>
      <Box>
        <SlideUpComponent>
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
        </SlideUpComponent>
      </Box>

      <Box textAlign={"center"} mt={2}>
        <Button color={"primary"} variant="outlined">
          View More
        </Button>
      </Box>
    </Container>
  );
};

export default NewArrivals;
