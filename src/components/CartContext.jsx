import { createContext, useState } from "react";

export const context = createContext();

const Provider = context.Provider;

export const MyProvider = ({children}) =>{

    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addConcert = (Item, q) =>{

        const addCart = [...cart];

        const new_ticket = {
            ...Item,
            q                   
        }   

        console.log(new_ticket);

        const found = addCart.find(cart => cart.id == new_ticket.id)

          if(!found){
            addCart.push(new_ticket);   
        }else{  
            new_ticket.q+=found.q;
            addCart.splice(addCart.indexOf(found),1);
            addCart.push(new_ticket);
        }
        
        setCart(addCart);
        setTotalQuantity(addCart.map(ticket => ticket.q).reduce((a,b)=>a+b,0))
        setTotal(addCart.map(ticket => ticket.q*ticket.price).reduce((a,b)=>a+b,0))
    }

    const delConcert = (id) => {
        const addCart = [...cart];
        const found = addCart.find(cart => cart.id == id)
        addCart.splice(addCart.indexOf(found),1);
        setCart(addCart);
        setTotalQuantity(addCart.map(ticket => ticket.q).reduce((a,b)=>a+b,0))
        setTotal(addCart.map(ticket => ticket.q*ticket.price).reduce((a,b)=>a+b,0))
    }

    const delCart = () => {
        setCart([]);
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