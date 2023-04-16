import { Card, CartItem } from '@/models'
import { Cart, CartState } from '@/models'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import ld_set from 'lodash/set'

const initialCart = (): Cart => ({
  username: '',
  card: {
    cardNumber: '',
    expDate: '',
    cvv: '',
  },
  address: '',
  items: new Map(),
})

const useStore = create<CartState>()(
  immer((set, get) => ({
    cart: initialCart(),
    addItem: (item: CartItem) =>
      set(({ cart }) => {
        if (cart.items) {
          item = {
            ...item,
            quantity: item.quantity + (cart.items.get(item.id)?.quantity || 0),
          }
        }
        cart.items.set(item.id, item)
      }),
    removeItem: (id: string) =>
      set(({ cart }) => {
        cart.items.delete(id)
      }),
    clearItems: () =>
      set(({ cart }) => {
        cart.items = new Map()
      }),
    itemsArray: () => Array.from(get().cart.items.values()),
    updateCartData: (path: string, value) =>
      set(({ cart }) => {
        ld_set(cart, path, value)
      }),
  }))
)

export default useStore
