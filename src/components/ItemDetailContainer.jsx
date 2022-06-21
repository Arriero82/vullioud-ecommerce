import React, {useEffect, useState} from "react";
import { getConcertById } from "../utilities/customFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{

    const [Item, setItem] = useState({});

    const {id} = useParams();

    useEffect(() =>{
        getConcertById(parseInt(id))
        .then(res => {setItem(res)})
    }, [])

    return(
       <ItemDetail {...Item}/>
    )
    
}

export default ItemDetailContainer;
