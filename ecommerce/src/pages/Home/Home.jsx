import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import {} from "./HomeStyled"
import FeaturedProduct from "../../components/FeaturedProducts/FeaturedProduct";
import Categories from "../../components/FeaturedProducts/Categories/Categories";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider/>
      <FeaturedProduct type="featured"/>
      <Categories/>
      <FeaturedProduct type="trending"/>
      <ContactUs/>
      <Footer />
    </>
  );
};

export default Home;
