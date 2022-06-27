import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { context } from './CartContext';

const CartWidget = () =>{

    const res = useContext(context);

    console.log(res.cart);



    return(
        <div className='shoppingCart'>
            <NavLink to="/Cart"><FontAwesomeIcon className='shoppingCart' icon={faCartShopping}/>{}</NavLink>
        </div>
    );  
}

export default CartWidget;  