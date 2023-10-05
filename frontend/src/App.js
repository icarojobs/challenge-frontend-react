import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar"
import { Product } from "./pages/products/product"
import { Cart } from "./pages/cart/cart"



function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={Product} />
                    <Route path='/cart' element={Cart} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
