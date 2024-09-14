import {
  Box,
  Button,
  FilledInput,
  FormControl,
  InputBase,
  InputAdornment,
  Stack,
  Typography,
  styled,
  useTheme,
  alpha,
  TextField,
  Grid2 as Grid,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import DarkThemeProvider from "../../context/DarkThemeProvider";

const Wrapper = styled(Stack)(({ theme }) => ({
  background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.dark} 50%, ${theme.palette.secondary.dark})`,
}));

const StayUpToDate = () => {
  const theme = useTheme();
  return (
    <DarkThemeProvider>
      <Wrapper alignItems={"center"}>
        <Box
          maxWidth={1024}
          borderRadius={4}
          mx={2}
          p={4}
          bgcolor={theme.palette.primary.main}
          // color={theme.palette.secondary.main}
        >
          <Box>
            <Grid container>
              <Grid size={{xs: 12, md: 6}}>
                <Typography variant="h3" color="primary">
                  Stay up to date about our latest offers
                </Typography>
              </Grid>
              <Grid size={{xs: 12, md: 6}}>
                <TextField
                  fullWidth
                  label="Enter your Email Address..."
                  type="email"
                />
                <Box>
                  <Button fullWidth color="primary" variant="contained">
                    <Typography
                      fontWeight={"bold"}
                      textTransform={"capitalize"}
                    >
                      Subscribe to Newsletter
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Wrapper>
    </DarkThemeProvider>
  );
};

export default StayUpToDate;
