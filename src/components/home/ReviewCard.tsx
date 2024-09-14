import { Box, Stack, Typography, styled, useTheme } from "@mui/material";
import React from "react";
import Rating from "../custom/Rating";

const Container = styled(Box)`
  max-width: 500px;
`;

const ReviewCard = () => {
  const theme = useTheme();
  return (
    <Container
      border={1}
      borderColor={theme.palette.primary.dark}
      p={4}
      borderRadius={2}
    >
      <Stack gap={1}>
        <Rating value={4} />
        <Box>
          <Typography variant="subtitle1">Sarah</Typography>
        </Box>
        <Typography>
          "I'm blown away by the quality and style of the clothes I received
          from Shop.co. From casual wear to elegant dresses, every piece I've
          bought has exceeded my expectations.”
        </Typography>
      </Stack>
    </Container>
  );
};

export default ReviewCard;
