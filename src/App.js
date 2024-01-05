import './assets/css/main.css';
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from 'react-router-dom';

//Components
import Nav from "./components/general/nav";

//Pages
import Home from "./pages/home/home";
import Cgu from "./pages/legals/cgu";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cgu" element={<Cgu/>}/>
                </Routes>
                <footer>
                    <Link to="/cgu">Conditions d'utilisation</Link>
                </footer>
            </Router>
        </div>
    );
}

export default App;
