import { useState } from 'react'
import { useCartStore } from '@/state'
import isEmpty from 'lodash/isEmpty'

import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { ListItemText } from '@mui/material'
import { Delete, ShoppingCart } from '@mui/icons-material'

type CartDrawerProps = {
  cartOpen: boolean
  toggleDrawer: Function
}

const CartDrawer = ({ cartOpen, toggleDrawer }: CartDrawerProps) => {
  const { items, removeItem } = useCartStore(({ itemsArray, removeItem }) => ({
    items: itemsArray(),
    removeItem,
  }))
  return (
    <SwipeableDrawer
      anchor='right'
      open={cartOpen}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
    >
      <Box sx={{ width: 500 }} role='cart-drawer'>
        {isEmpty(items) ? (
          <div> no items in cart</div>
        ) : (
          <>
            <List
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexFlow: 'column',
                gap: '1rem',
              }}
            >
              {Array.from(items.values()).map((item, index) => (
                <ListItem key={`${index}-${item.id}`}>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <ListItemText
                      sx={{ flexGrow: 1 }}
                      primary={item.name}
                      secondary={item.description}
                    />
                    <IconButton
                      sx={{ flexGrow: 0 }}
                      aria-label='delete-item'
                      onClick={() => removeItem(item.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                  <Box></Box>
                </ListItem>
              ))}
            </List>
            <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
              <Divider />
              <Button
                sx={{ margin: '1rem', width: 'calc(100% - 2rem)' }}
                size='large'
                variant='contained'
              >
                Checkout
              </Button>
            </Box>
          </>
        )}
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
