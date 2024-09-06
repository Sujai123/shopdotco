import { Stack, Toolbar, Box, styled, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "./IconButton";
import StyledNavLink from "./StyledNavLink";
import { useTheme } from "@emotion/react";

const StyledMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const AppNavBar = () => {
  const theme = useTheme();

  return (
    <StyledMuiAppBar position="static">
      <Toolbar variant="regular">
        <Stack direction={"row"} width={"100%"}>
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            <IconButton icon="menu" />
            <Box>
              <Typography variant="h5" fontWeight={"bold"}>
                SHOP.CO
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"end"}
            alignItems={"center"}
            spacing={2}
            width="100%"
          >
            <IconButton icon="search" />
            <IconButton icon="cart" />
            <IconButton icon="account" />
          </Stack>
        </Stack>
      </Toolbar>
    </StyledMuiAppBar>
  );
};

export default AppNavBar;
