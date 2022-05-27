import NavBar from "./NavBar";
import logo from "../img/eddieface.png";

const Footer = () =>{
    return(
        <footer>
            <img src={logo}/>
            <p>Copyright &copy;</p>
            <NavBar/>
        </footer>
    )
};

export default Footer;