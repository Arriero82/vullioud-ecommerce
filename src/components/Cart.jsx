import React from 'react'
import { useContext } from "react"; 
import { context} from './CartContext';  
import { Link } from 'react-router-dom';

const Cart = () => {

  const res = useContext(context);  
  
  const concerts = res.cart;

    const CartItems = concerts.map((concert) => {

    return(

        <div key={concert.id} className="cartItems">
          <h3>{concert.name}</h3>
          <p>{concert.description}</p>
          <h3>Price per ticket: {concert.price}</h3>
          <h3>Tickets purchased: {concert.q}</h3>
          <h3>Total: {concert.price*concert.q}</h3>
          <button className="btn" onClick={() => res.delConcert(concert.id)}>Delete tickets for this show</button>
        </div>
    )

  })  

  return(
    <>
      {res.cart.length >0 ? 
      <>
        <div>{CartItems}</div>
        <div><p className='cartTotal'>Total :{res.total}</p></div>
        <button className="btn"  onClick={res.delCart}>Delete all tickets</button>
        <Link to="/" className="btn" >Continue shopping</Link>
        <Link to="/checkout" className="btn"  >Proceed to Checkout</Link>
        </> 
      : <Link to="/" className='cartLinks'>You haven't selected any tickets, click here</Link>}
    </>
  )

}

export default Cart

