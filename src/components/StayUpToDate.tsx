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
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  width: "100%",
  borderRadius: "100vh",
  [theme.breakpoints.up("sm")]: {
    width: "20%",
  },
}));

const Search = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.95),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.85),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.black,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      // "&:focus": {
      //   width: "40ch",
      // },
    },
  },
}));

const StayUpToDate = () => {
  const theme = useTheme();
  return (
    <Stack alignItems={"center"}>
      <Box maxWidth={1024} borderRadius={4} mx={2} p={4} bgcolor={theme.palette.secondary.main}>
        <Box color={theme.palette.common.white}>
          <Stack gap={2}>
            <Typography variant="h3">
              Stay up to date about our latest offers
            </Typography>
            <Search mt={2}>
              <SearchIconWrapper>
                <SearchIcon color="secondary" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={"Enter your Email Address"}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box>
              <StyledButton color="primary" variant="contained">
                <Typography fontWeight={"bold"} textTransform={"capitalize"}>
                  Subscribe to Newsletter
                </Typography>
              </StyledButton>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default StayUpToDate;
