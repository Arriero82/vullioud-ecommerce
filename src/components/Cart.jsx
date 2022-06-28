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
      <div key = {concert.id}>
        <h2>{concert.name}</h2>
        <p>{concert.description}</p>  
        <h3>Tickets purchased: {concert.q}</h3>
      </div>
    )
  })

  return(
    <h1>Something</h1>
  )

}

export default Cart