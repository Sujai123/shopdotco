import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import theme from "./constants/theme";
import Home from "./pages/Home";
import BaseLayout from "./layout/BaseLayout";
import Category from "./pages/Category";

import { store } from './redux/store';

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
