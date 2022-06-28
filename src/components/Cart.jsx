import React from 'react'
import { useContext } from "react"; 
import { context} from './CartContext';  

const Cart = () => {

  const res = useContext(context);  

  console.log(res.cart);

  const concerts = res.cart;

    const CartItems = concerts.map((concert) => {
    console.log(concert.name);

    return(
      <div key={concert.id} className="cartItems">
      <h3>{concert.name}</h3>
      <p>{concert.description}</p>
      <h3>Price per ticket: {concert.price}</h3>
      <h3>Tickets purchased: {concert.q}</h3>
      <h3>Total: {concert.price*concert.q}</h3>
      </div>
    )

  })  

  return(
    <>
    <div>{CartItems}</div>
    </>
  )

}

export default Cart