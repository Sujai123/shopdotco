import {
  Stack,
  Toolbar,
  Box,
  styled,
  Typography,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import useToggle from "../../hooks/useToggle";
import { AccountCircle, Menu, Search, ShoppingCart } from "@mui/icons-material";

const StyledMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const AppNavBar = () => {
  const [openDrawer, toggleOpenDrawer] = useToggle(false);
  return (
    <Box>
      <StyledMuiAppBar position="static" color="background">
        <Toolbar variant="regular">
          <Stack direction={"row"} width={"100%"}>
            <Stack direction={"row"} alignItems={"center"} spacing={4}>
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
              <IconButton>
                <AccountCircle />
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
