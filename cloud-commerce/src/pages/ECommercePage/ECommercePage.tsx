import { useState } from 'react'
import './_ecommerce-page.scss'
import { ItemCard } from '@/components/ItemCard'
import { useCartStore } from '@/state'

const ECommercePage = () => {
  const [items, setItems] = useState(new Array(30).fill(''))
  const cart = useCartStore(state => state.cart)
  console.log(Array.from(cart.items.entries()))
  return (
    <>
      {JSON.stringify(
        cart,
        (key, value) => {
          if (value instanceof Map) {
            return Array.from(value.entries())
          } else {
            return value
          }
        },
        2
      )}
      <hr />
      <div id='ecommerce-page'>
        {items.map((item, index) => (
          <ItemCard key={`${index}-${item.id}`} open={index === 6} />
        ))}
      </div>
    </>
  )
}

export default ECommercePage
