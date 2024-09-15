import { ThemeProvider } from "@mui/material";
import { darkTheme } from "../constants/theme";
import { ReactNode } from "react";

type DarkThemeProviderProps = {
  children: ReactNode
}

const DarkThemeProvider = (props: DarkThemeProviderProps) => {
  const {children} = props;
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default DarkThemeProvider;
