import React from "react"
import Router from "./Router";
import "./Style/index.scss";

function App() {
    // adding class name so we can reference this from SCSS
    return  <div className="container"> 
        <Router />
    </div>
    
}

export default App;