import React from 'react'
import { db } from '../firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const checkout = () => {

    const handleBuy = () => {
        const collectionOrders = collection (db, "orders")

        const orderData = {
            buyer : {
                name : "",
                phone :"",
                email : ""
            },
            items: [{}],
            date : serverTimestamp(),
            total : null
        };

        const consult = addDoc(collectionOrders, orderData)
    }

  return (
    <>
    <div>checkout</div>
    <button onClick={handleBuy}>Place order</button>
    </>
  )
}

export default checkout