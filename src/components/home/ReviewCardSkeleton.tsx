import { Box, Skeleton, Stack } from "@mui/material";

const ReviewCardSkeleton = () => {
  return (
    <Box my={1}>
      <Stack gap={1}>
        <Skeleton variant="text" width={150} />
        <Skeleton variant="text" width={250} />
        <Skeleton variant="rounded" height={150} width={500} />
      </Stack>
    </Box>
  );
};

export default ReviewCardSkeleton;
