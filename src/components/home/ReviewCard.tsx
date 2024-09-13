import { Box, Stack, Typography, styled, useTheme } from "@mui/material";
import React from "react";
import Rating from "../Rating";

const Container = styled(Box)`
  max-width: 500px;
`;

const ReviewCard = () => {
  const theme = useTheme();
  return (
    <Container
      border={1}
      borderColor={theme.palette.primary.dark}
      p={2}
      borderRadius={6}
    >
      <Stack gap={1}>
        <Rating value={4} />
        <Box>
          <Typography>Sarah</Typography>
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
