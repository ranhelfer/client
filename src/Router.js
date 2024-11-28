import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/misc/Navbar";
import Home from "./components/Home/Home";

function Router() {
    return <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<div>Login</div>} />
         <Route path="/register" element={<div>Register</div>} />
    </Routes>
    </BrowserRouter>;
}


export default Router;