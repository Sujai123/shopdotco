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
  Rating,
  Chip,
} from "@mui/material";
import React from "react";
// import Rating from "../custom/Rating";
import OfferPercentage from "../custom/OfferPercentage";

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
    <Box my={1}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia sx={{ height: 140 }} image={imgSrc} title="green iguana" />
        <CardContent>
          <Typography variant="subtitle1">{title}</Typography>

          <Stack direction={"row"} gap={1}>
            <Rating readOnly value={rating} />
            <Typography>4/5</Typography>
          </Stack>

          <Box>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="subtitle1" fontWeight={"bold"}>
                ${price}
              </Typography>
              {offerPrice && (
                <OfferPrice variant="subtitle1" fontWeight={"bold"}>
                  ${offerPrice}
                </OfferPrice>
              )}
              {offerPercentage && (
                <Chip label={offerPercentage} color={"error"} />
              )}
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
