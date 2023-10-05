import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar"



function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <h1>Hello World!</h1>
            </Router>
        </div>
    );
}

export default App;
