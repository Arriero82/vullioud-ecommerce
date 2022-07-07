import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {db} from "../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = (props) =>{

    const [Items, setItems] = useState([]);

    const {categoryId} = useParams();

    useEffect(()=>{

        const collectionConcerts = collection(db, "concerts");

        const consult = categoryId ?
        query(collectionConcerts, where("category","==",parseInt(categoryId)))
        : collectionConcerts
        
        getDocs(consult).then((result) => {
            const concertsMap = result.docs.map((ref)=>{
                const res = ref.data();
                res.id = ref.id;
                return res; 
            })
        setItems(concertsMap);
        })
        .catch((error) => {
            console.log(error);
        }) 
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