import axios from "axios";
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "./AuthStyle.scss"

function Register() {

    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [formPasswordVerify, setFormPasswordVerify] = useState("");
    
    async function register(e) {
        e.preventDefault()
        console.log("i am trying to register"); 

        const registerData = {
            email: formEmail,
            password: formPassword,
            passwordVerify: formPasswordVerify
        }

         await axios.post("http://localhost:5001/auth/", registerData);
    }
    
    return <div className="auth-form">
        <h2>Register a new account</h2>
        <form className="form" onSubmit={register}>
            <label htmlFor="form-email">Email</label>
            <input type="email" value={formEmail} onChange={ 
                    (e) => setFormEmail(e.target.value)
            }/>

            <label htmlFor="form-password">Password</label>
            <input type="password" value={formPassword} onChange={ 
                    (e) => setFormPassword(e.target.value)
            }/>

            <label htmlFor="form-password-verify">Verify Password</label>
            <input type="password" value={formPasswordVerify} onChange={ 
                    (e) => setFormPasswordVerify(e.target.value)
            }/>

            <button className="btn-submit" type="submit">Register</button>

        </form>

        <p>Already have an account? <Link to="/login">Login instead</Link>
        </p>
        

        </div>;
}

export default Register;