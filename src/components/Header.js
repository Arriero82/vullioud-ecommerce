import NavBar from "./NavBar";
import logo from "../img/logo.png";


const Header = () =>{
    return(
        <header>
            <img src={logo}/>
            <NavBar/>
            </header>
    )
};

export default Header;