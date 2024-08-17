import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OfferProducts from "../components/OfferProducts";
import Products from "../components/Products";
import Company from "../components/Company";
import Reviews from "../components/Reviews";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OfferProducts />
      <Products />
      <Company />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
