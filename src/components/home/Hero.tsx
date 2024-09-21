import {
  Button,
  Grid2 as Grid,
  Box,
  Paper,
  Typography,
  styled,
  useTheme,
  CircularProgress,
  Container,
  Fade,
  useMediaQuery,
  ThemeOptions,
} from "@mui/material";
import HeroImg from "../../assets/images/HeroImage.png";
import { useAppSelector } from "../../redux/store";

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 10%;
`;

const Hero = () => {
  const theme = useTheme();
  const loader = useAppSelector((state) => state.dashboard.status);
  const stat = useAppSelector((state) => state.dashboard.statistics);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { brandsCount, productsCount, customersCount } = stat || {};
  const titleVariant = isSmallScreen ? "h4" : "h3";

  if (loader === "loading") {
    return (
      <Paper>
        <Container>
          <Grid
            container
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid>
              <CircularProgress />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    );
  }

  return (
    <Fade in={true} timeout={500}>
      <Paper>
        <Grid container>
          <Grid container size={{ xs: 12, md: 6 }} alignItems={"center"} p={4}>
            <Grid size={{ xs: 12 }} py={1}>
              <Box>
                <Typography fontWeight="bold" variant={titleVariant}>
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }} py={1}>
              <Box>
                <Typography>
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }} py={1}>
              <Box>
                <Button color={"secondary"} variant="contained">
                  <Typography fontWeight={"bold"}>Shop Now</Typography>
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 4 }}>
              <Box>
                <Typography
                  fontWeight={"bolder"}
                  variant="h5"
                  fontFamily={theme.typography.fontFamily}
                >
                  {brandsCount}+
                </Typography>
                <Typography variant="caption">International Brands</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 4 }}>
              <Box>
                <Typography
                  fontWeight={"bolder"}
                  variant="h5"
                  fontFamily={theme.typography.fontFamily}
                >
                  {productsCount}+
                </Typography>
                <Typography variant="caption">High-Quality Products</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }} textAlign={"center"}>
              <Box>
                <Typography
                  fontWeight={"bolder"}
                  variant="h5"
                  fontFamily={theme.typography.fontFamily}
                >
                  {customersCount}+
                </Typography>
                <Typography variant="caption">Happy customers</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box height={"530px"} width="100%">
              <Image src={HeroImg} alt="Hero" />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
};

export default Hero;
