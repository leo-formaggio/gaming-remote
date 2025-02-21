import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/global.js'
import { defaultTheme } from './style/theme/default.js'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />
				<ToastContainer />
    		<App />
			</ThemeProvider>
		</BrowserRouter>
  </StrictMode>
)