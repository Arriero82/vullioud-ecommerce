import { createContext, useState } from "react";

export const context = createContext();

const Provider = context.Provider;

export const MyProvider = ({children}) =>{

    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addConcert = (t, q) =>{

        const addCart = [...cart];

        const new_ticket = {
            ...t,
            q       
        }   

        const found = addCart.find(cart => cart.id == new_ticket.id)

          if(!found){
            addCart.push(new_ticket);   
        }else{  
            new_ticket.q+=found.q;
            addCart.splice(addCart.indexOf(found),1);
            addCart.push(new_ticket);
        }
        
        setCart(addCart);
        setTotalQuantity(new_ticket.q);
    }

    const delConcert = (t) => {

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
    }

    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}