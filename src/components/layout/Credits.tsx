import { Facebook, GitHub, Instagram, X } from "@mui/icons-material";
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
import StyledNavLink from "../custom/StyledNavLink";
import visaSVG from "../../assets/images/visa.svg";
import Image from "../custom/Image";

const Credits = () => {
  const theme = useTheme();
  return (
    <Box py={6} px={4} bgcolor={theme.palette.background.dark}>
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
              <Facebook />
            </IconButton>

            <IconButton>
              <Instagram />
            </IconButton>

            <IconButton>
              <GitHub />
            </IconButton>
          </Stack>
        </Grid>

        <Grid size={{ xs: 6, md: 3, lg: 2 }}>
          <Stack direction={"column"}>
            <Typography gutterBottom variant="subtitle1">
              Company
            </Typography>
            <StyledNavLink to="#">About</StyledNavLink>
            <StyledNavLink to="#">Features</StyledNavLink>
            <StyledNavLink to="#">Works</StyledNavLink>
            <StyledNavLink to="#">Career</StyledNavLink>
          </Stack>
        </Grid>

        <Grid size={{ xs: 6, md: 3, lg: 2 }}>
          <Stack direction={"column"}>
            <Typography gutterBottom variant="subtitle1">
              Help
            </Typography>
            <StyledNavLink to="#">Customer Support</StyledNavLink>
            <StyledNavLink to="#">Delivery Details</StyledNavLink>
            <StyledNavLink to="#">Terms & Conditions</StyledNavLink>
            <StyledNavLink to="#">Privacy Policy</StyledNavLink>
          </Stack>
        </Grid>

        <Grid size={{ xs: 6, md: 3, lg: 2 }}>
          <Stack direction={"column"}>
            <Typography gutterBottom variant="subtitle1">
              FAQ
            </Typography>

            <StyledNavLink to="#">Account</StyledNavLink>
            <StyledNavLink to="#">Manage Deliveries</StyledNavLink>
            <StyledNavLink to="#">Orders</StyledNavLink>
            <StyledNavLink to="#">Payment</StyledNavLink>
          </Stack>
        </Grid>

        <Grid size={{ xs: 6, md: 3, lg: 2 }}>
          <Stack direction={"column"}>
            <Typography gutterBottom variant="subtitle1">
              RESOURCES
            </Typography>
            <StyledNavLink to="#">Free eBook</StyledNavLink>
            <StyledNavLink to="#">Development Tutorial</StyledNavLink>
            <StyledNavLink to="#">How to - Blog</StyledNavLink>
            <StyledNavLink to="#">Youtube Playlist</StyledNavLink>
          </Stack>
        </Grid>
      </Grid>

      <Divider />

      <Grid container m={2} textAlign={"center"}>
        <Grid size={{ xs: 12 }}>
          <Typography>Shop.co © 2000-2023, All Rights Reserved</Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Stack direction={"row"} justifyContent={"center"}>
            <IconButton>
              <Image iconType={"visa"} />
            </IconButton>

            <IconButton>
              <Image iconType={"master"} />
            </IconButton>

            <IconButton>
              <Image iconType={"paypal"} />
            </IconButton>

            <IconButton>
              <Image iconType={"applepay"} />
            </IconButton>

            <IconButton>
              <Image iconType={"gpay"} />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Credits;
