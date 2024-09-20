import {
  Box,
  Container,
  Grid2 as Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { useAppSelector } from "../../redux/store";

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
  const browseByStyle = useAppSelector(
    (state) => state.dashboard.browseByStyle,
  );
  return (
    <Container>
      <Paper>
        <Box mx={2} mt={2}>
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
