import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import theme from './constants/theme'
import Home from './pages/Home';
import BaseLayout from './layout/BaseLayout';
import Category from './pages/Category';

function App() {

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BaseLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
