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
    updateCartData: ({
      userName,
      card,
      address,
    }: {
      userName: string
      card: string
      address: string
    }) =>
      set(({ cart }) => {
        if (userName) cart.userName = userName
        if (card) cart.card = card
        if (address) cart.address = address
      }),
  }))
)

export default useStore
