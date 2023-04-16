import { Item } from './Item'

export interface CartItem extends Item {
  quantity: number
}

export interface Card {
  cardNumber: string
  expDate: string
  cvv: string
}

export type CartBase = {
  username: string
  address: string
  card: Card
}

export interface Cart extends CartBase {
  items: Map<string, CartItem>
}

export interface CartState {
  cart: Cart
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearItems: () => void
  itemsArray: () => CartItem[]
  updateCartData: (path: string, value: string | Cart | CartItem | Card) => void
}
