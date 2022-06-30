import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react"; 
import { context} from './CartContext';  

const NavBar = () =>{

    const res = useContext(context);
    const length = res.cart.length;

    return( 
        <div className="navBar">
            <NavLink to="category/1">South America</NavLink>
            <NavLink to="category/2">North America</NavLink>
            <NavLink to="category/3">Asia</NavLink>
            {length > 0 ? <CartWidget/> : null}
        </div>
    )
};

export default NavBar;
