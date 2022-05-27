import NavBar from "./NavBar";
import logo from "../img/logo.png";

const Header = () =>{
    return(
        <header>
            <img src={logo}/>
            <h1>Titulo</h1>
            <NavBar/>
        </header>
    )
};

export default Header;