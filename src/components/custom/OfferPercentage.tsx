import { alpha, Box, styled, Typography, useTheme } from "@mui/material";
import React from "react";

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  borderRadius: ".5rem",
}));

const OfferPercentage = ({ value, status }) => {
  const theme = useTheme();

  return (
    <Box>
      {status === "success" ? (
        <Container
          color={theme.palette.success.dark}
          bgcolor={alpha(theme.palette.success.light, 0.2)}
        >
          <Typography>{value}</Typography>
        </Container>
      ) : (
        <Container
          color={theme.palette.error.dark}
          bgcolor={alpha(theme.palette.error.light, 0.2)}
        >
          <Typography>{value}</Typography>
        </Container>
      )}
    </Box>
  );
};

export default OfferPercentage;
