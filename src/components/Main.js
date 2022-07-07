import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import {Route, Routes} from "react-router-dom"
import Checkout from "./Checkout";

const Main = (props) =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Tickets for next concerts"/>}/>
                <Route path="/concert/:id" element={<ItemDetailContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer greeting="Tickets for next concerts"/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>  
        </main>
    )   
};

export default Main;