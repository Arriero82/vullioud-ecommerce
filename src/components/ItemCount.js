import { useState } from "react";
import swal from "sweetalert";


const ItemCount = (props) =>{

    const [count, setCount] = useState(props.initial);

    const addCount = () =>{
        if(count<props.stock)
        setCount(count + 1);
    }

    const delCount = () =>{
        if(count>props.initial)
        setCount(count - 1)
    }

    const confirmCart = () => {
        swal(count + " tickets added to the cart");
        props.onAdd(count);
    
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