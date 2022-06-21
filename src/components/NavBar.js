import CartWidget from "./CartWidget";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
        <div className="navBar">
            <Link to="category/1">South America</Link>
            <Link to="category/2">North America</Link>
            <Link to="category/3">Asia</Link>
            <CartWidget/>   
        </div>
    )
};

export default NavBar;
