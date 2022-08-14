import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';


import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
const App = () => {

    const user = JSON.parse(localStorage.getItem("profile"));

    return (
        <GoogleOAuthProvider clientId="792417815801-juju8ate6hfvtlganulqe1eud92v4lfm.apps.googleusercontent.com">
            <BrowserRouter>
                <Container madxidth="xl">
                    <Navbar />
                    <Routes>
                        <Route path="/" exact element={<Navigate replace to="/posts"/>} />
                        <Route path="/posts" exact element={<Home />} />
                        <Route path="/posts/search" exact element={<Home />} />
                        <Route path="/posts/:id" exact element = {<PostDetails />} />
                        <Route path="/auth" element={(!user ? <Auth /> : <Navigate replace to="/posts" />)} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
}

export default App;