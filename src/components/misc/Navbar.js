import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss"
import UserContext from "../../context/UserContext";
import axios from "axios";
import domain from "../util/domain";

function Navbar() {

    const { user, getUser } = useContext(UserContext)
    const navigate = useNavigate();

    async function logOut() {
        console.log("logout done")
        await axios.get(`${domain}/auth/logout`);
        await getUser();
        navigate("/login");

    }

    return <div className="navbar">
                <Link to="/">
            
                    <h1>Snippet Manager</h1>

                </Link>
                { user === null && 
                    (<>

                        <Link to="/login">
            
                         Login

                        </Link>
                        <Link to="/register">
            
                            Register
                    
                        </Link>
                    </>)
                } 
                { user && (<>

                    <button className="btn-logout" onClick={logOut}>Logout</button>
                    </>)}
           </div>
                
}

export default Navbar;