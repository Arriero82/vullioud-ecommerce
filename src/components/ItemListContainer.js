    import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import { customFetch, getConcertByCategory } from "../utilities/customFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {db} from "../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = (props) =>{

    const [Items, setItems] = useState([]);

    const {categoryId} = useParams();


    useEffect(()=>{

        const collectionConcerts = collection(db, "concerts");
        const queryByCategory = query(collectionConcerts, where("category","==",parseInt(categoryId)))
        const consult = getDocs(collectionConcerts);
        const consultByCategory = getDocs(queryByCategory)

        if(!categoryId){
            consult
        .then((result) => {
            const concerts_map = result.docs.map((ref)=>{
                const res = ref.data();
                res.id = ref.id;
                return res; 
            })
        setItems(concerts_map);
        })  
        .catch((error) => {
            console.log(error);
        })
        }else{
            consultByCategory
            .then((result) => {
                const concertsByCategory_map =  result.docs.map((ref) => {
                    const res = ref.data();
                    res.id = ref.id;
                    return res;
                })
            setItems(concertsByCategory_map)
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }, [categoryId])

/*     useEffect(() => {   
    
        if(!categoryId){
            customFetch()
            .then(res => setItems(res))
        }else{
            getConcertByCategory(parseInt(categoryId))
            .then(res => setItems(res))
        }
    }, [categoryId])  */   
    
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