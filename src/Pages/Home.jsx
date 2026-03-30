import React from "react";
import ProductBar from "../Components/ProductBar";
import Hero from "../Components/Home/Hero";
import DeatilsBar from "../Components/Home/DetailsBar";
import CategorySection from "../Components/Home/CategoryBar";
import Offer from "../Components/Offer";
// import DealCard from "../DealCard";
import DealBar from "../Components/Home/DealBar";
import DiscontBar from "../Components/Home/DiscountBar";
import Newsletter from "../Components/Home/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <DeatilsBar />
      <CategorySection />
      <ProductBar />
      <Offer/>
      <DealBar/>
      <DiscontBar/>
      <Newsletter/>
      
    </>
  );
};

export default Home;
