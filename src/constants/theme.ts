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
    h4: {
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
          textTransform: "none",
          fontWeight: "bold",
        },
      },
    },
  },
};

export const lightTheme = createTheme(
  deepmerge(standardTheme, lightPaletteTheme),
);

export const darkTheme = createTheme(
  deepmerge(standardTheme, darkPaletteTheme),
);

export const corouselResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: lightTheme.breakpoints.values.lg },
    items: 3,
  },
  tablet: {
    breakpoint: {
      max: lightTheme.breakpoints.values.lg,
      min: lightTheme.breakpoints.values.sm,
    },
    items: 2,
  },
  mobile: {
    breakpoint: { max: lightTheme.breakpoints.values.sm, min: 0 },
    items: 1,
  },
};
