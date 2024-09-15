import { Box, Stack, Typography, styled, Rating, Paper } from "@mui/material";

const Container = styled(Box)`
  max-width: 500px;
`;

const ReviewCard = ({ name, comment, rating }) => {
  return (
    <Paper>
      <Container minHeight={150}>
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
