import React from "react";
import { motion } from "framer-motion";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import NewsLetter from "../components/NewsLetter";
import BookNowForm from "../components/BookNowButton";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Home = () => {
  return (
    <main className="mt-32 space-y-24">
      <motion.div {...fadeInUp}>
        <MainBanner />
      </motion.div>

      <motion.div {...fadeInUp}>
        <AboutUs />
      </motion.div>

      <motion.div {...fadeInUp}>
        <OurServices />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Categories />
      </motion.div>

      <motion.div {...fadeInUp}>
        <BestSeller />
      </motion.div>

      <motion.div {...fadeInUp}>
        <BottomBanner />
      </motion.div>

      <motion.div {...fadeInUp}>
        <NewsLetter />
      </motion.div>
    </main>
  );
};

export default Home;
