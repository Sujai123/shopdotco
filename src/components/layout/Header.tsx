import {
  Stack,
  Toolbar,
  Box,
  styled,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import StyledNavLink from "../custom/StyledNavLink";
import { AccountCircle, Search, ShoppingCart } from "@mui/icons-material";

const StyledMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Header = () => {
  return (
    <StyledMuiAppBar position="static" color="background">
      <Toolbar variant="regular">
        <Stack direction={"row"} width={"100%"}>
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            <Box>
              <Typography variant="h5" fontWeight={"bold"}>
                SHOP.CO
              </Typography>
            </Box>
            <Box>
              <StyledNavLink to="#"> Shop </StyledNavLink>
            </Box>
            <Box>
              <StyledNavLink to="#"> On Sale </StyledNavLink>
            </Box>
            <Box>
              <StyledNavLink to="#"> New Arrivals </StyledNavLink>
            </Box>
            <Box>
              <StyledNavLink to="#"> Brands </StyledNavLink>
            </Box>
            <Box minWidth={300}>
              <TextField
                placeholder="Search for products..."
                variant="outlined"
                slotProps={{
                  input: {
                    startAdornment: <Search />,
                  },
                }}
              />
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"end"}
            alignItems={"center"}
            spacing={2}
            width="100%"
          >
            <Box>
              <IconButton>
                <ShoppingCart />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <AccountCircle />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Toolbar>
    </StyledMuiAppBar>
  );
};

export default Header;
