import { Box, Paper, Rating, Stack, Typography, styled } from "@mui/material";

type RatingProps = {
  name: string;
  comment: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

const Container = styled(Box)`
  max-width: 500px;
`;

const ReviewCard = ({ name, comment, rating }: RatingProps) => {
  return (
    <Paper>
      <Container minHeight={230}>
        <Stack gap={1} p={4}>
          <Rating readOnly value={rating} />
          <Box>
            <Typography variant="subtitle1">{name}</Typography>
          </Box>
          <Typography>"{comment}”</Typography>
        </Stack>
      </Container>
    </Paper>
  );
};

export default ReviewCard;
