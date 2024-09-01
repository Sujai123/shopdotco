import { Stack, Toolbar, Box, styled, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import SearchBar from "./SearchBar";
import IconButton from "./IconButton";
import StyledNavLink from './StyledNavLink'

const StyledMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
}));

const Header = () => {

  return (
    <StyledMuiAppBar position="static">
      <Toolbar variant="regular">
        <Stack
          direction={"row"}
          width={"100%"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            <Box>
              <Typography variant="h5" fontWeight={'bold'}>
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
            <Box>
              <SearchBar placeholder="Search for products..." />
            </Box>
          </Stack>
          <Stack direction={"row"} justifyContent={"end"} alignItems={"center"} spacing={2} width="100%">
            <Box>
              <IconButton icon="cart" />
            </Box>
            <Box>
              <IconButton icon="account" />
            </Box>
          </Stack>
        </Stack>
      </Toolbar>
    </StyledMuiAppBar>
  );
};

export default Header;
