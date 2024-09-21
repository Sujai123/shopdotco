import { ThemeOptions, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";

const lightPaletteTheme: ThemeOptions = {
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#ffffff",
      paper: "#F2F0F1",
    },
  },
};

const darkPaletteTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      paper: "#121212",
      default: "#121212",
    },
  },
};

const standardTheme: ThemeOptions = {
  typography: {
    fontFamily: "Satoshi",
    h3: {
      fontFamily: "Integral CF",
    },
    h5: {
      fontFamily: "Integral CF",
    },
    subtitle1: {
      fontWeight: "bold",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100vh",
          paddingInline: 40,
          paddingBlock: 10,
        },
      },
    },
  },
};

const rootTheme = deepmerge(standardTheme, lightPaletteTheme);

const theme = createTheme(rootTheme);

export const darkTheme = createTheme(
  deepmerge(standardTheme, darkPaletteTheme),
);

export default theme;
