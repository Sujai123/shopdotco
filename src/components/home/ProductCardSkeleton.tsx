import { Box, Skeleton, Stack } from "@mui/material";

const ProductCardSkeleton = () => {
  return (
    <Box my={1}>
      <Stack gap={1}>
        <Skeleton variant="rounded" height={150} width={250} />
        <Skeleton variant="text" width={200} />
        <Skeleton variant="text" width={150} />
        <Skeleton variant="text" width={50} />
      </Stack>
    </Box>
  );
};

export default ProductCardSkeleton;
