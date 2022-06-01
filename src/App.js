import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

const App = () =>{
    return(
        <>
            <Header/>
            <Main/>
            <ItemListContainer greeting="Welcome!"/>
            <Footer/>
        </>
    )
};


export default App; 