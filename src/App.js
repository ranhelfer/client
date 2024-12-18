import React from "react"
import Router from "./Router";
import "./Style/index.scss";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";

// Make sure we get credentials
axios.defaults.withCredentials = true;

function App() {
    // adding class name so we can reference this from SCSS
    return (
    <UserContextProvider>
        <div className="container"> 
            <Router />
        </div>
    </UserContextProvider>);
    
}

export default App;