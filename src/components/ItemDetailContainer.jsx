import React, {useEffect, useState} from "react";
import { getConcertById } from "../utilities/customFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {db} from "../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () =>{

    const [Item, setItem] = useState({});
    
    const {id} = useParams();

    useEffect(() =>{

        const collectionConcerts = collection(db, "concerts");
        const refDoc =  doc(collectionConcerts, id);
        const consult = getDoc(refDoc);

        consult
        .then((res) => {  
            const result = (res.data());
            setItem(result)
        })
        
        .catch((error) => {
            console.log(error);
        })
         
    }, [])      

    return(
       <ItemDetail {...Item}/>
    )    
}

export default ItemDetailContainer;
