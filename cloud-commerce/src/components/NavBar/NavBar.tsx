import { useState } from 'react'
import { useCartStore } from '@/state'
import isEmpty from 'lodash/isEmpty'

import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { ShoppingCart } from '@mui/icons-material'
import CheckoutSteps from './CheckoutSteps'

type CartDrawerProps = {
  cartOpen: boolean
  toggleDrawer: Function
}

const CartDrawer = ({ cartOpen, toggleDrawer }: CartDrawerProps) => {
  const items = useCartStore(({ itemsArray }) => itemsArray())
  return (
    <SwipeableDrawer
      anchor='right'
      open={cartOpen}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
    >
      <Box sx={{ width: 500 }} role='cart-drawer'>
        {isEmpty(items) ? <div> no items in cart</div> : <CheckoutSteps />}
      </Box>
    </SwipeableDrawer>
  )
}

const NavBar = () => {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Cloud Commerce
          </Typography>
          <IconButton color='inherit' aria-label='cart' onClick={() => setCartOpen(true)}>
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>
      <CartDrawer cartOpen={cartOpen} toggleDrawer={setCartOpen} />
    </>
  )
}

export default NavBar
