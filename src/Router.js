import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<div>Home</div>} />
         <Route path="/login" element={<div>Login</div>} />
         <Route path="/register" element={<div>Register</div>} />
    </Routes>
    </BrowserRouter>;
}


export default Router;