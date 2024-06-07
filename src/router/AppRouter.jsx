import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import ProductDetail from '../pages/ProductDetail';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route >
                    <Route path="/details/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
            <Footer />
        </>
    )
}

export default AppRouter