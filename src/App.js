//const App = () => 'Hola Mundo con JSX y Arrow function';

/*
function App(){
    return (
        <div>
            <p>Hola</p>
            <p>Chau</p>
        </div>
    )
};
*/
//fragment: es una eitqueta que no tiene nombre
/*
const App = () =>{
    return(
        <>
        <p>Hola</p>
        <p>Chau</p>
        </>
    )
};
*/

//export default variable
//export variable

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () =>{
    return(
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
};


export default App; //export default por unica vez. cuando la importe lo hago sin llaves, hay otras diferencias tecnicas.