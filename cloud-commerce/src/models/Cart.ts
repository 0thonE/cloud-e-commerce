import { Item } from './Item'

export interface CartItem extends Item {
  quantity: number
}

export type CartBase = {
  userName: string
  card: string
  address: string
}

export interface Cart extends CartBase {
  items: Map<string, CartItem>
}

export interface CartState {
  cart: Cart
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearItems: () => void
  updateCartData: (cartBase: CartBase) => void
}
