import { ComponentType, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'



import './index.scss'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <Router>
          <App />
      </Router>
    </StrictMode>,
  )
}

export default render
