import { faHourglass2 } from "@fortawesome/free-solid-svg-icons";


const ItemListContainer = (props) =>{
    return(
        <div className = "ItemListContainer">
            <h2>{props.greeting}</h2>
        </div>
    );
}

export default ItemListContainer;