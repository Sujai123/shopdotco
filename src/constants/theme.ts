import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      dark: '#F2F0F1'
    },
    secondary: {
      main: '#000000'
    },
    text: {
      primary: '#000000'
    }
  },
  typography: {
    fontFamily: 'Satoshi',
    h3: {
      fontFamily: "Integral CF"
    },
    h5: {
      fontFamily: "Integral CF"
    }
  }
});

export default theme;