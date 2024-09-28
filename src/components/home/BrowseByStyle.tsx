import {
  Box,
  CircularProgress,
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
  margin: 15px 10px;
`;

const BrowseByStyle = () => {
  const loader = useAppSelector((state) => state.dashboard.status);
  const browseByStyle = useAppSelector(
    (state) => state.dashboard.browseByStyle,
  );
  return (
    <Container>
      <Paper>
        <Box my={2}>
          <Box textAlign={"center"} p={2}>
            <Typography variant="h5">Browse By Dress Style</Typography>
          </Box>
          {loader === "loading" ? (
            <Container>
              <Grid
                container
                height={"80vh"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid>
                  <CircularProgress />
                </Grid>
              </Grid>
            </Container>
          ) : (
            <Container>
              <Grid container>
                {browseByStyle.map((each) => (
                  <Grid size={{ xs: 12, md: 6 }} key={each.id}>
                    <StyledBox position={"relative"}>
                      <StyledImage src={each.imgSrc} />
                      <StyledTypography variant="h5">
                        {each.title}
                      </StyledTypography>
                    </StyledBox>
                  </Grid>
                ))}
              </Grid>
            </Container>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default BrowseByStyle;
