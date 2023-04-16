import { Box, IconButton } from '@mui/material'
import { Remove, Add } from '@mui/icons-material'

interface Props {
  handleDecrement: any
  handleIncrement: any
  quantity: number
}

function ItemQuantity({ quantity, handleIncrement, handleDecrement }: Props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handleDecrement} disabled={quantity <= 1}>
        <Remove />
      </IconButton>
      <Box sx={{ minWidth: '40px', textAlign: 'center !important' }}>{quantity}</Box>
      <IconButton onClick={handleIncrement}>
        <Add />
      </IconButton>
    </Box>
  )
}

export default ItemQuantity
