import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
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
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia sx={{ height: 140 }} image={imgSrc} title="green iguana" />
        <CardContent>
          <Typography variant="subtitle1">
            {title}
          </Typography>

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
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
