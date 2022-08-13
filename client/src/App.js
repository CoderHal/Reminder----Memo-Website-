import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';


import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {


    return (
        <GoogleOAuthProvider clientId="792417815801-juju8ate6hfvtlganulqe1eud92v4lfm.apps.googleusercontent.com">
            <BrowserRouter>
                <Container madxidth="lg">
                    <Navbar />
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/auth" element={<Auth />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
}

export default App;