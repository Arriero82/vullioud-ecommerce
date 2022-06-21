import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import {Route, Routes} from "react-router-dom"

const Main = (props) =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Tickets for next concerts"/>}/>
                <Route path="/concert/:id" element={<ItemDetailContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer greeting="Tickets for next concerts"/>}/>
            </Routes>  
        </main>
    )
};

export default Main;