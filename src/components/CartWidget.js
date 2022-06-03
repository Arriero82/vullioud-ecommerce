import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'


const CartWidget = (props) =>{
    return(
        <div className='shoppingCart'>
            <FontAwesomeIcon className='shoppingCart' icon={faCartShopping}/> 
        </div>
    );  
}

export default CartWidget;  