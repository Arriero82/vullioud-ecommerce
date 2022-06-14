import React from "react";
import ItemCount from "./ItemCount";

const Item = ({id, name, image, price, stock}) =>{

    return(
        <div key={id}>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
           {/*  <h3>Price ${price}</h3> */}
            {/* <ItemCount stock={stock} initial={1}/> */}
        </div>      
    )
}

export default Item;