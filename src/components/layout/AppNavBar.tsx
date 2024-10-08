import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import useToggle from "../../hooks/useToggle";
import {
  AccountCircle,
  Menu,
  Search,
  ShoppingCart,
  DarkMode,
  Contrast,
} from "@mui/icons-material";
import { useCustomTheme } from "../../context/CustomThemeProvider";

const StyledMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const AppNavBar = () => {
  const [openDrawer, toggleOpenDrawer] = useToggle(false);
  const { toggleMode, mode } = useCustomTheme();
  return (
    <Box>
      <StyledMuiAppBar position="static" color="transparent">
        <Toolbar variant="regular">
          <Stack direction={"row"} width={"100%"}>
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton onClick={toggleOpenDrawer}>
                <Menu />
              </IconButton>
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
              <IconButton>
                <Search />
              </IconButton>
              <IconButton>
                <ShoppingCart />
              </IconButton>
              <IconButton onClick={toggleMode}>
                {mode === "light" ? <DarkMode /> : <Contrast />}
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </StyledMuiAppBar>
      <Drawer open={openDrawer} onClose={toggleOpenDrawer}>
        <Box width={250} onClick={toggleOpenDrawer}>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <ListItemText>Search</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText>Cart</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText>Account</ListItemText>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AppNavBar;
