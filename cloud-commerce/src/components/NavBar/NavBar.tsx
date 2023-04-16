import { useState } from 'react'
import { useCartStore } from '@/state'
import { AppBar, Box, IconButton, SwipeableDrawer, Toolbar, Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import isEmpty from 'lodash/isEmpty'
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
