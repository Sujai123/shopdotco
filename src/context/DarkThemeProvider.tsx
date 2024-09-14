import { ThemeProvider } from '@mui/material'
import React from 'react'
import { darkTheme } from '../constants/theme'

const DarkThemeProvider = ({children}) => {
  return (
    <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
  )
}

export default DarkThemeProvider