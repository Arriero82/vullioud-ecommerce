import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

const App = () =>{
    return(
        <>
            <Header/>
            <ItemListContainer greeting="Welcome!"/>
            <Main message="Tickets for next concerts"/>
            <Footer/>
        </>
    )
};

export default App; 