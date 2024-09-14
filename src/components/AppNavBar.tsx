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
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "./IconButton";
import useToggle from "../hooks/useToggle";
import { AccountCircle, Search, ShoppingCart } from "@mui/icons-material";

const StyledMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const AppNavBar = () => {
  const [openDrawer, toggleOpenDrawer] = useToggle(false);
  return (
    <Box>
      <StyledMuiAppBar position="static" color="secondary">
        <Toolbar variant="regular">
          <Stack direction={"row"} width={"100%"}>
            <Stack direction={"row"} alignItems={"center"} spacing={4}>
              <IconButton icon="menu" onClick={toggleOpenDrawer} />
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
