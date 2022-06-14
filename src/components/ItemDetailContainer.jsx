import React, {useEffect, useState} from "react";
import customFetch from "../utilities/customFetch";
import ItemDetail from "./ItemDetail";
import concerts from "../utilities/concerts";

const ItemDetailContainer = (props) =>{

    const [Item, setItem] = useState({});

    useEffect(() =>{
        customFetch(2000,concerts[1])
        .then(res => setItem(res))
    }, [Item])

    return(
        <ItemDetail image={Item.image} name={Item.name} price={Item.price} description={Item.description} stock={Item.stock}/>
    )
    
}

export default ItemDetailContainer;

