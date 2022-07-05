import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import { MyProvider } from "./components/CartContext";
//import { addDoc, collection, getFirestore } from "firebase/firestore";
//import concerts from "./utilities/concerts";
//import { collectionConcerts } from "./firebase";

//concerts.map((concert)=> addDoc(collectionConcerts, concert));

const App = () =>{

    return( 
        <BrowserRouter>     
            <MyProvider>
                <Header />
                <Main />
                <Footer />
            </MyProvider>
        </BrowserRouter>
    )
};

export default App; 
            