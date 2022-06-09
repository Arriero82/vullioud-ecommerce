import { useState } from "react";
import swal from "sweetalert";
import React, {createContext} from "react";

const ItemCount = (props) =>{


    const onAdd = () =>{
        
    }

    const[count, setCount] = useState(props.initial);

    const addCount = () =>{
        if(count<props.stock)
        setCount(count + 1);
    }

    const delCount = () =>{
        if(count>1)
        setCount(count - 1)
    }

    const [cartCount, setCartCount] = useState(props.stock)
    
    const confirmCart = () => {
        if(count<=cartCount){
            setCartCount(cartCount-count)
            swal(count + " tickets added to the cart", "Remaining "+ (cartCount-count) + " tickets");
        }else{
            swal("We don't currently have that many tickets");
        }
        
    }

    return( 
        <div className="counter">
            <button className="btn" onClick={addCount}>+</button>
            <button className="btn" onClick={delCount}>-</button>
            <p>You have selected {count} tickets</p> 
            <button className="btn" onClick={confirmCart}>Confirm</button>
        </div>
    );
}

export default ItemCount;