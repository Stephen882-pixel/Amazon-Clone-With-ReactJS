import React from "react";
import Header from "./Header";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <div className="checkout">
          <img  className="checkout__ad" src="/images/ad2.jpg" alt="" />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is Empty</h2>
              <p>
                You have no items in your basket. To buy one or more items, click
                "Add to basket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your Shopping Basket</h2>

              {basket.map(item => (
                <CheckoutProduct 
                  item={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
      </div>
    </>
  );
}

export default Checkout;
