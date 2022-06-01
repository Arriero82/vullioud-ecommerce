import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons'



const CartWidget = () =>{
    return(
        <>
            <FontAwesomeIcon icon={faCartShopping} style={{fontSize: "2em", color: "yellow", margin: "1em"}}/>
        </>
    );
}

export default CartWidget;