import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import WomenProducts from "./Components/Home/WomenProduct";
import MenProducts from "./Components/Home/MenProduct";
import ScrollToTop from "./Components/ScrollToTop";

import Cart from "./Components/Cart";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NotFoundPage from "./Components/NotFoundPage";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/women" element={<WomenProducts category="women" />} />
          <Route path="/men" element={<MenProducts category="men" />} />
          <Route path="/product" element={<ProductDetails />}>
            <Route path=":productId" element={<ProductDetails />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFoundPage />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
