import { ComponentType, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './config'

import './index.scss'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </Router>
    </StrictMode>,
  )
}

export default render
