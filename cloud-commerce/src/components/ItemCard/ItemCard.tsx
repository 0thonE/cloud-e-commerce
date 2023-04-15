import React, { useState } from 'react'
import './_item-card.scss'
import classNames from 'classnames'
import { giphyNoImage } from '@/config/giphy'
import { Item } from '@/models'
import { useCartStore } from '@/state'

interface Props {
  openCard: Function
  open?: boolean
  item?: Item
}

const defaultItem: Item = {
  id: 'def-Id',
  name: 'Name not found',
  description: 'lorem ipsum',
  price: 0,
}

const ItemCard = ({ open, openCard, item = defaultItem }: Props) => {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCartStore(state => state)
  return (
    <div
      className={classNames('item-card', { 'opened-card': open })}
      onClick={() => openCard(item.id)}
    >
      {/* <div className='squircle'> */}
      <div className='item-container'>
        <div className='image-title-wrapper'>
          <img
            className='item-img'
            title='No Image Found'
            src={item.url || giphyNoImage}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null // prevents looping
              currentTarget.src = giphyNoImage
            }}
          />
          {!open && <h4 className='item-title'>{item.name}</h4>}
        </div>
        {open && (
          <div className='content-wrapper'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className='content-footer'>
              <div className='quantity-items'>
                <button
                  className='less-items'
                  onClick={() => {
                    if (quantity < 2) return
                    setQuantity(prev => prev - 1)
                  }}
                >
                  -
                </button>
                {quantity}
                <button
                  className='more-items'
                  onClick={() => {
                    setQuantity(prev => prev + 1)
                  }}
                >
                  +
                </button>
              </div>
              <button
                className='add-cart-btn'
                onClick={() => {
                  addItem({
                    ...item,
                    quantity,
                  })
                  // closeItem
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  )
}

export default ItemCard
