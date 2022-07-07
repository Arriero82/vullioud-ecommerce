import NavBar from "./NavBar";
import logo from "../img/eddieface.png";

const Footer = () =>{
    return(
        <footer>
            <p>Iron Maiden Copyright &copy; by Iron Maiden LLC</p>
            <img src={logo} alt="Eddie face"/>
            <NavBar/>
        </footer>   
    )
};

export default Footer;