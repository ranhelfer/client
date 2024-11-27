import React from "react"
import Router from "./Router";
import "./Style/index.scss";

function App() {
    return  <div className="container"> // adding class name so we can reference this from SCSS
        <Router />
    </div>
    
}

export default App;