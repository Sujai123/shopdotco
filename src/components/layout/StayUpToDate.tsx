import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Mail } from "@mui/icons-material";
import DarkThemeProvider from "../../context/DarkThemeProvider";

const Wrapper = styled(Stack)(({ theme }) => ({
  background: `linear-gradient(${theme.palette.background.default}, ${theme.palette.background.default} 50%, ${theme.palette.background.paper} 50%, ${theme.palette.background.paper})`,
}));

const StayUpToDate = () => {
  return (
    <Wrapper alignItems={"center"}>
      <DarkThemeProvider>
        <Container>
          <Paper>
            <Box p={4}>
              <Grid container>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h3" gutterBottom>
                    Stay up to date about our latest offers
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    color="secondary"
                    fullWidth
                    placeholder="Enter your Email Address..."
                    type="email"
                    slotProps={{
                      input: {
                        startAdornment: <Mail />,
                        // margin: 'dense'
                      },
                    }}
                  />
                  <Box mt={2}>
                    <Button fullWidth variant="contained">
                      <Typography textTransform={"capitalize"}>
                        Subscribe to Newsletter
                      </Typography>
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </DarkThemeProvider>
    </Wrapper>
  );
};

export default StayUpToDate;
