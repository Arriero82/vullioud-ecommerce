import { createContext, useState } from "react";
import concerts from "../utilities/concerts";
import { getConcertById } from "../utilities/customFetch";

export const context = createContext();

const Provider = context.Provider;

export const MyProvider = ({children}) =>{
        
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addCart = [];

    const addConcert = (t) =>{
       setCart(t);
    }

      const delConcert = (concert) => {

    }

    const delCart = () => {

    }

    const contextValue = {
        cart : cart,
        totalQuantity : totalQuantity,
        total : total,
        addConcert: addConcert,
        delConcert : delConcert,
        delCart : delCart,
        addCart : addCart,
    }

    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}