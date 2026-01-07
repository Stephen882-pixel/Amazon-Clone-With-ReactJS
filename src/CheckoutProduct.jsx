import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id,item, title, image, price, rating }) {

    const [{basket},dispatch] = useStateValue();

    console.log("This is the basket >>>",basket);

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROMM_BASKET',
            id: id,
        })
    }

  return (
    <div className='checkoutProduct'>
      <img  className='checkoutProduct__image' src={image} alt="" />
        <div className="checkoutProduct__info">
            <p className='checkoutProduct__title'>{title}</p>

            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
