import { Route } from 'react-router-dom'
import { PublicRoutes } from '@/models'
import { ECommercePage } from '@/pages'
import { NavBar, RoutesWithNotFound } from '@/components'

import './App.scss'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div id='root-container'>
        <RoutesWithNotFound>
          <Route path={PublicRoutes.HOME} element={<ECommercePage />} />
        </RoutesWithNotFound>
      </div>
    </div>
  )
}

export default App
