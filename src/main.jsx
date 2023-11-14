import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './hooks/auth.jsx'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
