import concerts from "./concerts";

export const customFetch = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(concerts);
        }, 2000)
    })
}   

export const getConcertById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(concerts.find(ticket => ticket.id === id));
        }, 2000)
    })
}

export const getConcertByCategory = (categoryId) =>{
    return new Promise((resolve) => {   
        setTimeout(() => {
            resolve(concerts.filter(ticket => ticket.category === categoryId));
        }, 2000)
    })
}   