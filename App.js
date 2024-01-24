import * as React from "react"
import { BrowserRouter as router, Route, Link } from "react-router-dom"
import AboutMe from "./boxmodel/componentmateri/AboutMe";
import Contact from "./boxmodel/componentmateri/Contact";
import Main from "./boxmodel/componentmateri/Main";
import Footer from "./boxmodelcomponentmateri/Footer";
import Navbar from "./boxmodel/componentmateri/Navbar";

const App =()=> {
    return (  
    <div className="app">
        <Router>
       
        <nav>
            <ul>
                <li>
                    <link to="/">home</link>
                </li>

                <li>
                    <link to="/about">About</link>
                </li>

                <li>
                    <link to="/contact">Contact</link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route index element = {<Main/>}/>
            <Route path = "about" element={<aboutme}></Route>
        </Routes>
    </div>
    
    );
}