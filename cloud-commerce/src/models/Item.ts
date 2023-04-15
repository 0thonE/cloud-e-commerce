export type ItemBase = {
  id: string
  name: string
  description: string
  url?: string
}

export interface Item extends ItemBase {
  price: number
  stock?: number
}

export interface ECommerceStore {
  items: Item[]
}
