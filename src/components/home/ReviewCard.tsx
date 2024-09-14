import {
  Box,
  Stack,
  Typography,
  styled,
  useTheme,
  Rating,
  Paper,
} from "@mui/material";
import React from "react";
// import Rating from "../custom/Rating";

const Container = styled(Box)`
  max-width: 500px;
`;

const ReviewCard = () => {
  const theme = useTheme();
  return (
    <Container>
      <Paper>
        <Stack gap={1} p={4}>
          <Rating readOnly value={4} />
          <Box>
            <Typography variant="subtitle1">Sarah</Typography>
          </Box>
          <Typography>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ReviewCard;
