import NavBar from "./NavBar";
import logo from "../img/logo.png";
import CartWidget from "./CartWidget";

const Header = () =>{
    return(
        <header>
            <img src={logo}/>
            <NavBar/>
            <CartWidget/>
        </header>
    )
};

export default Header;