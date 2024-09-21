import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import ReviewCard from "./ReviewCard";
import { useAppSelector } from "../../redux/store";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ReviewCardSkeleton from "./ReviewCardSkeleton";
import FadedComponent from "../../hocs/FadedComponent";
import { useInView, animated } from "@react-spring/web";
import SlideUpComponent from "../../hocs/SlideUpComponent";
import Carousel from "react-multi-carousel";
import { corouselResponsive } from "../../constants/theme";

const OurHappyCustomers = () => {
  const happyCustomers = useAppSelector(
    (state) => state.dashboard.happyCustomers,
  );
  const loader = useAppSelector((state) => state.dashboard.status);

  return (
    <Box my={4}>
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5" gutterBottom>
            Our Happy Customers
          </Typography>
        </Stack>

        <Box>
          {loader === "loading" ? (
            <Stack direction={"row"} overflow={"auto"} gap={2}>
              {new Array(2).fill(null).map((_, index) => (
                <ReviewCardSkeleton key={index} />
              ))}
            </Stack>
          ) : (
            <SlideUpComponent>
              <Carousel responsive={corouselResponsive}>
                {happyCustomers.map((each) => (
                  <ReviewCard
                    key={each.id}
                    name={each.name}
                    comment={each.comment}
                    rating={each.rating}
                  />
                ))}
              </Carousel>
            </SlideUpComponent>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default OurHappyCustomers;
