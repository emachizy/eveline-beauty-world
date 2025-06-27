import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import NewsLetter from "../components/NewsLetter";
import BookNowForm from "../components/BookNowButton";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <main className=" mt-32">
      <MainBanner />
      <AboutUs />
      <OurServices />
      <Categories />
      <BestSeller />
      <BottomBanner />
      <NewsLetter />
    </main>
  );
};

export default Home;
