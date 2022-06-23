import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () =>{
    return(
        <div className="navBar">
            <NavLink to="category/1">South America</NavLink>
            <NavLink to="category/2">North America</NavLink>
            <NavLink to="category/3">Asia</NavLink>
            <NavLink to="/Cart"><CartWidget/></NavLink>
            
        </div>
    )
};

export default NavBar;
