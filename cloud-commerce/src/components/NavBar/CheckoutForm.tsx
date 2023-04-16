import { useCartStore } from '@/state'
import { Box, TextField, Typography } from '@mui/material'
import { cvvFormat, expDateFormat, formatCardNumber } from '@/utility'

const CheckoutForm = () => {
  const { username, address, cardNumber, expDate, cvv, updateCartData } = useCartStore(
    ({ cart, updateCartData }) => {
      const { username, address, card } = cart
      return { username, address, ...card, updateCartData }
    }
  )

  return (
    <Box sx={{ width: 'calc(100% - 2rem)', height: '100%', padding: '0 1rem', mt: 4 }}>
      <Typography variant='h5' sx={{ mb: 2 }}>
        User Info
      </Typography>

      <TextField
        required
        fullWidth
        label='Full Name'
        value={username}
        onChange={e => updateCartData('username', e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        required
        fullWidth
        label='Address'
        value={address}
        onChange={e => updateCartData('address', e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        required
        fullWidth
        label='Card Number'
        placeholder='1234 1234 1234 1234'
        value={cardNumber}
        onChange={({ target }) => updateCartData('card.cardNumber', formatCardNumber(target.value))}
        sx={{ mb: 2 }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          required
          label='Expiry Date'
          placeholder='MM / YY'
          value={expDate}
          onChange={({ target }) => updateCartData('card.expDate', expDateFormat(target.value))}
          sx={{ width: '48%' }}
        />

        <TextField
          required
          label='CVV'
          placeholder='000'
          value={cvv}
          onChange={({ target }) => updateCartData('card.cvv', cvvFormat(target.value))}
          sx={{ width: '48%' }}
          inputProps={{ maxLength: 3, pattern: `\d*` }}
        />
      </Box>
      {cardNumber}
      {expDate}
      {cvv}
    </Box>
  )
}

export default CheckoutForm
