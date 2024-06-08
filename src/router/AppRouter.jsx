import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import About from '../pages/About';
import ProductDetail from '../pages/ProductDetail';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/details/:id" element={<ProductDetail />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default AppRouter