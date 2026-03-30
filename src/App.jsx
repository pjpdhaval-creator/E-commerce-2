import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
// import ChatGpt from "./Pages/ChatGpt"
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Shop from "./Pages/Shop";
import Collection from "./Pages/Collection";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import ContactUs from "./Pages/Contact";
import AboutUsPage from "./Pages/About";

const App = () => {
  return (
    <> 
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:collection" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* <Route path="/chatgpt" element={<ChatGpt/>}/> */}
      </Routes>
      <Footer/>

    </>
  );
};

export default App;
