import React from "react";
import ItemCount from "./ItemCount";    

const ItemDetail = (props) =>{

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
                <ItemCount stock={props.stock} initial={1}/>  
            </div>
        )
   }
    

}

export default ItemDetail;
