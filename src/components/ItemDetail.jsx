import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount"; 
import { useContext } from "react"; 
import CartWidget from "./CartWidget";
import { context } from './CartContext';   
import { useParams } from "react-router-dom";     

const ItemDetail = (Item) =>{

    const [Concert, setConcert] = useState({});
    const [quantity, setQuantity] = useState(0);        

    const res = useContext(context); 

    const {id} = useParams();
    
    const newItem = {
        ...Item,
        id
    }

    useEffect(()=>{
        setConcert(newItem)
    },[])

    const onAdd = (q) =>{   
        setQuantity(q);
        res.addConcert(newItem ,q);
    }

    if(Item.name===undefined){   
       return(
            <div className="detail">
            <h2>Requesting data, please wait</h2>
            </div>
       )    
   }else{
        return(     
            <div className="detail">        
                <img src={Item.image} alt={Item.name} />       
                <h1>{Item.name}</h1>           
                <h2>Price ${Item.price}</h2>
                <h3>{Item.description}</h3>
                {quantity === 0 ? <ItemCount stock={Item.stock} initial={1} onAdd={onAdd}/> : <><p>Go to </p><CartWidget/></>}
                
            </div>
        )
   }
}

export default ItemDetail;
