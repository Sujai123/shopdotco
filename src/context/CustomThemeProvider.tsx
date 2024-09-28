import { CssBaseline, ThemeOptions, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../constants/theme";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CustomThemeProviderProps = {
  children: ReactNode;
};

type CustomThemeContextType = {
  mode: "light" | "dark";
  toggleMode: () => void;
};

const CustomThemeContext = createContext<null | CustomThemeContextType>(null);

const CustomThemeProvider = (props: CustomThemeProviderProps) => {
  const { children } = props;
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [theme, setTheme] = useState<null | ThemeOptions>(null);

  useEffect(() => {
    if (mode === "light") {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  if (theme === null) return null;

  return (
    <CustomThemeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export const useCustomTheme = () =>
  useContext(CustomThemeContext) as CustomThemeContextType;

export default CustomThemeProvider;
