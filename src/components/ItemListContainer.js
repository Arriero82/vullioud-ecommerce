import ItemCount from "./ItemCount";

const ItemListContainer = (props) =>{

    const onAdd = () =>{
        
    }

    return(
        <div className = "ItemListContainer">
            <h2>{props.greeting}</h2>
            <ItemCount initial={1} stock={5}/>
        </div>
    );
}

export default ItemListContainer;