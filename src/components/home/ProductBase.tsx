import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type ProductBaseProps = {
  title: string;
  children: ReactNode;
};

const ProductBase = ({ title, children }: ProductBaseProps) => {
  return (
    <Box>
      <Typography variant="h5" textAlign={"center"} padding={2}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default ProductBase;
