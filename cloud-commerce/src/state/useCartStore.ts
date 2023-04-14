import { CartItem, Item } from '@/models'
import { Cart, CartState } from '@/models'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const initialCart = (): Cart => ({
  userName: '',
  card: '',
  address: '',
  items: new Map(),
})

const useStore = create<CartState>()(
  immer(set => ({
    cart: initialCart(),
    addItem: (item: CartItem) =>
      set(state => {
        if (state.cart.items) {
          console.log('first', item)
          item = {
            ...item,
            quantity: item.quantity + (state.cart.items.get(item.id)?.quantity || 0),
          }
        }
        state.cart.items.set(item.id, item)
      }),
    removeItem: (id: string) =>
      set(state => {
        state.cart.items.delete(id)
      }),
    clearItems: () => set(state => (state.cart.items = new Map())),
    updateCartData: ({
      userName,
      card,
      address,
    }: {
      userName: string
      card: string
      address: string
    }) =>
      set(state => {
        if (userName) state.cart.userName = userName
        if (card) state.cart.card = card
        if (address) state.cart.address = address
      }),
  }))
)

export default useStore
