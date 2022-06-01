import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
        <div className="navBar">
            <a href="#">Home</a>
            <a href="#">History</a>
            <a href="#">Band</a>
            <a href="#">Concerts</a>
            <a href="#">Tickets</a>
            <CartWidget/>   
        </div>
    )
};

export default NavBar;
