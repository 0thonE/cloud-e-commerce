import { Box, IconButton } from '@mui/material'
import { MouseEventHandler } from 'react'

interface Props {
  onMore: MouseEventHandler<HTMLAnchorElement>
  onLess: MouseEventHandler<HTMLAnchorElement>
  quantity: number
}

function ItemQuantity({ quantity, onMore, onLess }: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <IconButton sx={{ flexGrow: 0 }} aria-label='delete-item' onClick={onLess}>
        <Less />
      </IconButton> */}
    </Box>
  )
}

export default ItemQuantity
