import React from "react";
import Item from "./Item";

const ItemList = ({concerts}) => {
    return(
        concerts.map(t =>
            <Item
            id={t.id}
            name={t.name}
            image={t.image}
            price={t.price}
            key={t.id}
            stock={t.stock}
            />    
        )   
    )
}

export default ItemList;