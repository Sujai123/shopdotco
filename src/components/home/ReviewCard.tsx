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

const ReviewCard = ({
  name, comment, rating
}) => {
  const theme = useTheme();
  return (
    <Container>
      <Paper>
        <Stack gap={1} p={4}>
          <Rating readOnly value={rating} />
          <Box>
            <Typography variant="subtitle1">{name}</Typography>
          </Box>
          <Typography>
            "{comment}”
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ReviewCard;
