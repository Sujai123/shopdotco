import React from "react";
import {
  Button,
  Grid2 as Grid,
  Box,
  Typography,
  styled,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import HeroImg from "../../assets/images/HeroImage.png";
import { darkTheme } from "../../constants/theme";
import DarkThemeProvider from "../../context/DarkThemeProvider";

const Image = styled("img")`
  max-height: 530px;
  object-fit: cover;
  object-position: 0 10%;
`;

const Hero = () => {
  const theme = useTheme();
  return (

    <Box bgcolor={'background.dark'}>
      <Grid container>
        <Grid container size={{ xs: 12, md: 6 }} alignItems={"center"} p={4}>
          <Grid size={{ xs: 12 }} py={1}>
            <Box>
              <Typography fontWeight="bold" variant="h3">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12 }} py={1}>
            <Box>
              <Typography>
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense
                of style.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12 }} py={1}>
            <Box>
              <Button color={"secondary"} variant="contained">
                <Typography fontWeight={"bold"} textTransform={"capitalize"}>
                  Shop Now
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4 }}>
            <Box>
              <Typography fontWeight={'bolder'} variant="h5" fontFamily={theme.typography.fontFamily}>
                200+
              </Typography>
              <Typography>International Brands</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4 }}>
            <Box>
              <Typography fontWeight={'bolder'} variant="h5" fontFamily={theme.typography.fontFamily}>
                2,000+
              </Typography>
              <Typography>High-Quality Products</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} textAlign={"center"}>
            <Box>
              <Typography fontWeight={'bolder'} variant="h5" fontFamily={theme.typography.fontFamily}>
                30,000+
              </Typography>
              <Typography>Happy customers</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Image src={HeroImg} alt="Hero" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
