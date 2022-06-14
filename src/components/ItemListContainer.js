import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import customFetch from "../utilities/customFetch";
import concerts from "../utilities/concerts";
import ItemList from "./ItemList";

const ItemListContainer = (props) =>{

    const [Items, setItems] = useState([]);

    useEffect(() => {
        customFetch(2000, concerts)
        .then(res => setItems(res))
    }, [Items])

    if(Items.length < 1){
        return(
            <h2>Loading, please wait</h2>
        )
        
    }else{
        return(
            <>
                <h3>{props.greeting}</h3>
                <div className = "ItemListContainer">
                    <ItemList concerts={Items}/>
                </div>
            </>
        );
    }
    
}

export default ItemListContainer;