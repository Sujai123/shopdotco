import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
  styled,
} from "@mui/material";

type ProductCardProps = {
  imgSrc: string;
  title: string;
  rating: number;
  price: number;
  offerPrice?: number;
  offerPercentage?: string;
};

const OfferPrice = styled(Typography)`
  text-decoration: line-through;
  color: gray;
`;

const ProductCard = (props: ProductCardProps) => {
  const { imgSrc, title, rating, price, offerPrice, offerPercentage } = props;
  return (
    <Box my={1}>
      <ButtonBase>
        <Card sx={{ width: 250, height: 270 }} color="inherit">
          <CardMedia sx={{ height: 140 }} image={imgSrc} title="green iguana" />
          <CardContent>
            <Typography variant="subtitle1">{title}</Typography>

            <Stack direction={"row"} gap={1}>
              <Rating readOnly value={rating} />
              <Typography>4/5</Typography>
            </Stack>

            <Box>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  ${price}
                </Typography>
                {offerPrice && (
                  <OfferPrice variant="subtitle1" fontWeight={"bold"}>
                    ${offerPrice}
                  </OfferPrice>
                )}
                {offerPercentage && (
                  <Chip
                    size="small"
                    label={offerPercentage}
                    color={"success"}
                  />
                )}
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </ButtonBase>
    </Box>
  );
};

export default ProductCard;
