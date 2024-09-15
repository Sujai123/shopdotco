import { createTheme, ThemeOptions } from "@mui/material";
import { deepmerge } from "@mui/utils";

const themeObj: ThemeOptions = {
  palette: {
    // mode: 'dark',
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      main: "#ffffff",
      dark: "#F2F0F1",
    },
  },
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
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: (({theme}) => ({
  //         padding: theme.spacing(2),
  //         width: '100%',
  //         borderRadius: '100vh',
  //         // [theme.breakpoints.up('sm')]: {
  //         //   width: '40%',
  //         // }
  //       }))
  //     }
  //   }
  // }
};

const darkThemeObj = {
  palette: {
    mode: "dark",
    // primary: {
    //   main: '#ffffff'
    // },
    // secondary: {
    //   main: '#000000'
    // },
    // background: {
    //   dark: '#ffffff',
    //   // dark: '#F2F0F1'
    // }
  },
};

const theme = createTheme(themeObj);

export const darkTheme = createTheme(deepmerge(themeObj, darkThemeObj));

export default theme;
