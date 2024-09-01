import { Stack, Toolbar, Box } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import IconButton from "./IconButton";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  white-space: nowrap;
`;

const AppBar = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar variant="regular">
        <Stack
          direction={"row"}
          width={"100%"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            <Box>
              <StyledNavLink to="#"> SHOP.CO </StyledNavLink>
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
    </MuiAppBar>
  );
};

export default AppBar;
