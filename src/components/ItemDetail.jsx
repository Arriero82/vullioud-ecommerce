import React, { useState } from "react";
import ItemCount from "./ItemCount"; 
import { useContext } from "react"; 
import CartWidget from "./CartWidget";
import { context} from './CartContext';   
import { useParams } from "react-router-dom";     
import concerts from "../utilities/concerts";

const ItemDetail = (props) =>{

    const [quantity, setQuantity] = useState(0);        

    const res = useContext(context);  
    
    const {id} = useParams();

     const onAdd = (q) =>{   
        setQuantity(q);
        res.addConcert(concerts[id-1], q)
        console.log("Agregando al carrito: "+(concerts[id-1].name)+" cantidad: "+q);
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
                {quantity == 0 ? <ItemCount stock={props.stock} initial={1} onAdd={onAdd}/> : null}
                {/* <p>Go to </p><CartWidget/> */}
            </div>
        )
   }
}

export default ItemDetail;
