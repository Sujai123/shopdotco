import {
  Box,
  Container,
  Grid2 as Grid,
  Paper,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { useSelector } from "react-redux";

const StyledTypography = styled(Typography)`
  position: absolute;
  top: 5%;
  left: 5%;
`;

const StyledImage = styled("img")`
  border-radius: 16px;
  height: 200px;
  width: 100%;
`;

const StyledBox = styled(Box)`
  margin: 5px;
  /* background-color: red; */
`;

const BrowseByStyle = () => {
  const theme = useTheme();
  const browseByStyle = useSelector((state) => state.dashboard.browseByStyle);
  return (
    <Container>
      <Paper elevation={0}>
        <Box mx={2} mt={2} bgcolor={theme.palette.background.dark}>
          <Box textAlign={"center"} p={2}>
            <Typography variant="h5">Browse By Dress Style</Typography>
          </Box>
          <Grid container p={4}>
            {browseByStyle.map((each) => (
              <Grid size={{ xs: 12, md: 6 }} key={each.id}>
                <StyledBox position={"relative"}>
                  <StyledImage src={each.imgSrc} />
                  <StyledTypography variant="h5">{each.title}</StyledTypography>
                </StyledBox>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default BrowseByStyle;
