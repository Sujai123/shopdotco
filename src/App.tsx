import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import theme from './constants/theme'
import Home from './pages/Home';
import BaseLayout from './layout/BaseLayout';
import Category from './pages/Category';

import { useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get('https://example.com/user')
      console.log(data)
    }
    fetchData()
  }, [])

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
