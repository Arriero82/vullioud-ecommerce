import React, { useState } from "react";
import ItemCount from "./ItemCount"; 
import { useContext } from "react"; 
import CartWidget from "./CartWidget";
import { context } from './CartContext';   
import { useParams } from "react-router-dom";     
import {db} from "../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetail = (props) =>{

    const [Item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);        

    const res = useContext(context); 
    
    const {id} = useParams();
    
    const collectionConcerts = collection(db, "concerts");
        const refDoc =  doc(collectionConcerts, id);
        const consult = getDoc(refDoc);

        consult
        .then((result) => {
            const rest = result.data();
            rest.id = result.id;
            setItem(rest);
         })
        .catch((error) => {
            console.log(error);
        })

    const onAdd = (q) =>{   
        setQuantity(q);
        res.addConcert(Item ,q);
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
                <p>Go to </p><CartWidget/>
            </div>
        )
   }
}

export default ItemDetail;
