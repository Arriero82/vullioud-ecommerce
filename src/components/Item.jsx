import React from "react";
import { Link } from "react-router-dom";

const Item = ({id, name, image}) =>{

    return(
        <div key={id}>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <Link to={`/concert/${id}`}><h3>Get tickets</h3></Link>
        </div>      
    )
}

export default Item;