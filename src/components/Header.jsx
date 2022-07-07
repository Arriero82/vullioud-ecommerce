import NavBar from "./NavBar";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header>
            <Link to="/"><img src={logo} alt="Iron Maiden logo"/></Link>
            <NavBar/>
        </header>
    )
};

export default Header;

