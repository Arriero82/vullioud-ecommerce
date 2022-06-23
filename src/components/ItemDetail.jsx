import React, { useState } from "react";
import ItemCount from "./ItemCount"; 
import { Link } from "react-router-dom";  
import CartWidget from "./CartWidget";

const ItemDetail = (props) =>{

    const [quantity, setQuantity] = useState(0);        

    const onAdd = (q) =>{
        setQuantity(q);
    }

    if(props.name==undefined){   
       return(
            <div className="detail">
            <h2>Requesting data, please wait</h2>
            </div>
       )
   }else{
        return( 
            <div className="detail">        
                <img src={props.image} alt={props.name} />       
                <h1>{props.name}</h1>           
                <h2>Price ${props.price}</h2>
                <h3>{props.description}</h3>
                {quantity == 0 ? <ItemCount stock={props.stock} initial={1} onAdd={onAdd}/> : <></>}
                <Link to="/Cart" ><button className="btn">Go to <CartWidget/></button></Link>
            </div>
        )
   }
}

export default ItemDetail;
