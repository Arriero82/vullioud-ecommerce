import React from 'react'
import { db } from '../firebaseConfig'
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useContext } from 'react';
import { context } from './CartContext';
import Form from './Form';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const [data, setData] = useState({ name: '', email: '', phone: '' });

    const [order, setOrder] = useState('');

    const res = useContext(context);

        const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {   
        e.preventDefault();
        const objOrder = {
            buyer: {
                name: data.name,
                phone: data.phone,
                email: data.email,
            },
            cart: res.cart,
            total: res.total,
            date: serverTimestamp(),
        };

        const ref = collection(db, 'orders');
        addDoc(ref, objOrder).then((response) => {
            setOrder(response.id)
            res.delCart();   
        });     
    };

    const CartMap = res.cart.map((concert) => {
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

    if (order !== '') {
        return (
            <>
             <h1>Thanks, please save this information. Your order number is:  {order}</h1>
             <Link to="/" className='cartLinks'>Click here to continue shopping</Link>
            </>
           
        )
        }

  return (
    <>
    {res.cart.length > 0 ? (
        <>
        <div>{CartMap}</div>
        <Form handleChange={handleChange} data={data} handleSubmit={handleSubmit}/>
        </>
    ) : <Link to="/" className='cartLinks'>You haven't selected any tickets, click here</Link>
    }
    </>
  )
}

export default Checkout