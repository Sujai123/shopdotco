import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import Home from "./pages/Home";
import BaseLayout from "./layout/BaseLayout";
import Category from "./pages/Category";
import store from "./redux/store";
import CustomThemeProvider from "./context/CustomThemeProvider";

function App() {
  return (
    <ReduxProvider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </ReduxProvider>
  );
}

export default App;
