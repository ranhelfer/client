import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import UserContext from "../../context/UserContext";

function Navbar() {

    const user = useContext(UserContext)

    return <div className="navbar">
                <Link to="/">
            
                    <h1>Snippet Manager</h1>

                </Link>

                { !user && (<>

                <Link to="/login">
            
                    Login

                </Link>
                <Link to="/register">
            
                    Register
                    
                </Link>
                </>)
                } 

                { user && (<>

                    <button className="btn-logout">Logout</button>
                    </>)}
           </div>;
                
}

export default Navbar;