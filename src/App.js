import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import { MyProvider } from "./components/CartContext";
import {app} from "./firebase";

console.log(app);

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
            