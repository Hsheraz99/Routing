import React from "react";
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Home from "../../pages/home";
import login from "../../pages/Login"
import dashboard from "../../pages/dashboard"

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/home" element={<home />} />
                <Route path="login" element={<login />} />
                <Route path="dashboard" element={<dashboard />} />
            </Routes>
        </Router>
    );
}