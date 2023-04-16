import { useCartStore } from '@/state'
import { Delete } from '@mui/icons-material'
import { Box, IconButton, List, ListItem, ListItemText } from '@mui/material'

const Cart = () => {
  const { items, removeItem } = useCartStore(({ itemsArray, removeItem }) => ({
    items: itemsArray(),
    removeItem,
  }))
  return (
    <List
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexFlow: 'column',
        gap: '1rem',
      }}
    >
      {Array.from(items.values()).map((item: any, index) => (
        <ListItem key={`${index}-${item.id}`}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <ListItemText sx={{ flexGrow: 1 }} primary={item.name} secondary={item.description} />
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
  )
}

export default Cart
