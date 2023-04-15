import { useState } from 'react'
import './_ecommerce-page.scss'
import { ItemCard } from '@/components/ItemCard'
import { useCartStore } from '@/state'
import { e_commerce } from '@/assets'

const fetchECommerceItems = () => e_commerce.items

const ECommercePage = () => {
  const [openedCard, setOpenedCard] = useState('')
  const items = fetchECommerceItems()

  const openCard = (itemId: string) => {
    if (openedCard === itemId) return
    setOpenedCard(itemId)
  }
  return (
    <div id='ecommerce-page'>
      {items.map((item, index) => (
        <ItemCard
          key={`${index}-${item.id}`}
          item={item}
          open={item.id === openedCard}
          openCard={openCard}
        />
      ))}
    </div>
  )
}

export default ECommercePage
