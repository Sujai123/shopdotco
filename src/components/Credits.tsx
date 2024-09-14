import { X } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid2 as Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import StyledNavLink from "./StyledNavLink";

const Credits = () => {
  const theme = useTheme();
  return (
    <Box py={6} px={4} bgcolor={theme.palette.secondary.dark}>
      <Grid container m={2}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography gutterBottom variant="h3">
            Shop.co
          </Typography>
          <Typography>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </Typography>
          <Stack direction={"row"}>
            <IconButton>
              <X />
            </IconButton>

            <IconButton>
              <X />
            </IconButton>

            <IconButton>
              <X />
            </IconButton>
          </Stack>
        </Grid>

        <Grid size={{ xs: 6, md: 3, lg: 2 }}>
          <Stack direction={"column"}>
            <Typography gutterBottom variant="subtitle1">
              Company
            </Typography>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
          </Stack>
        </Grid>

        <Grid size={{ xs: 6, md: 3, lg: 2 }}>
          <Stack direction={"column"}>
            <Typography gutterBottom variant="subtitle1">
              Company
            </Typography>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
          </Stack>
        </Grid>

        <Grid size={{ xs: 6, md: 3, lg: 2 }}>
          <Stack direction={"column"}>
            <Typography gutterBottom variant="subtitle1">
              Company
            </Typography>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
          </Stack>
        </Grid>

        <Grid size={{ xs: 6, md: 3, lg: 2 }}>
          <Stack direction={"column"}>
            <Typography gutterBottom variant="subtitle1">
              Company
            </Typography>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">About</StyledNavLink>
          </Stack>
        </Grid>
      </Grid>

      <Divider />

      <Grid container m={2} textAlign={"center"}>
        <Grid size={{xs: 12}}>
          <Typography>Shop.co © 2000-2023, All Rights Reserved</Typography>
        </Grid>
        <Grid size={{xs: 12}}>
          <Stack direction={"row"} justifyContent={"center"}>
            <IconButton>
              <X />
            </IconButton>

            <IconButton>
              <X />
            </IconButton>

            <IconButton>
              <X />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Credits;
