import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import { customFetch, getConcertByCategory } from "../utilities/customFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) =>{

    const [Items, setItems] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {   
    
        if(!categoryId){
            customFetch()
            .then(res => setItems(res))
        }else{
            getConcertByCategory(parseInt(categoryId))
            .then(res => setItems(res))
        }
    }, [categoryId])    
    
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