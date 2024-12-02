import React from "react"
import Router from "./Router";
import "./Style/index.scss";
import axios from "axios";

// Make sure we get credentials
axios.defaults.withCredentials = true;

function App() {
    // adding class name so we can reference this from SCSS
    return  <div className="container"> 
        <Router />
    </div>
    
}

export default App;