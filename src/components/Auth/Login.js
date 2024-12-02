import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import "./AuthStyle.scss"

function Login() {
    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    
    async function login(e) {
        e.preventDefault()
        console.log("i am trying to register"); 

        const loginData = {
            email: formEmail,
            password: formPassword,
        }
        try {
            await axios.post("http://localhost:5001/auth/login", loginData);
        } catch  (err) {
            console.log({err}) 
        }
    }
    
    return <div className="auth-form">
        <h2>Login to your account</h2>
        <form className="form" onSubmit={login}>
            <label htmlFor="form-email">Email</label>
            <input type="email" value={formEmail} onChange={ 
                    (e) => setFormEmail(e.target.value)
            }/>

            <label htmlFor="form-password">Password</label>
            <input type="password" value={formPassword} onChange={ 
                    (e) => setFormPassword(e.target.value)
            }/>

            <button className="btn-submit" type="submit">Login</button>
            <p>Don't have an account? <Link to="/register">Regsiter Here</Link>
            </p>
        </form>

        
        

        </div>;
}

export default Login;