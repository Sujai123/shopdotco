import { Box, Paper, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Rating from "../Rating";
import OfferPercentage from "../OfferPercentage";

const Image = styled("img")``;

const ImageContainer = styled(Box)`
  width: 15rem;
`;

const OfferPrice = styled(Typography)`
  text-decoration: line-through;
  color: gray;
`;

const ProductCard = ({
  imgSrc,
  title,
  rating,
  price,
  offerPrice,
  offerPercentage,
}) => {
  return (
    <Box>
      <Paper elevation={1}>
        <ImageContainer>
          <Image src={imgSrc} alt={imgSrc} />
        </ImageContainer>

        <Box p={1}>
          <Box>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              {title}
            </Typography>
          </Box>

          <Rating value={rating} />

          <Box>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="subtitle1" fontWeight={"bold"}>
                ${price}
              </Typography>
              <OfferPrice variant="subtitle1" fontWeight={"bold"}>
                ${price}
              </OfferPrice>
              <OfferPercentage value={'-20'} status={'profit'} />
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProductCard;
