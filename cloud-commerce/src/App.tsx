import { Route } from 'react-router-dom'

import './App.scss'
import { NavBar,RoutesWithNotFound } from '@/components'
import { /* CheckoutPage, */ ECommercePage } from '@/pages'
import { PublicRoutes } from '@/models'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div id='root-container'>
        <RoutesWithNotFound>
          <Route path={PublicRoutes.HOME} element={<ECommercePage />} />
          {/* <Route path={PublicRoutes.CHECKOUT} element={<CheckoutPage />} /> */}
        </RoutesWithNotFound>
      </div>
    </div>
  )
}

export default App
