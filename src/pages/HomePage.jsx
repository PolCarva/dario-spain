import React from "react";
import MainLayout from "../components/MainLayout";
import Hero from "../components/Hero";
import CardSwiper from "../components/CardSwiper";

const HomePage = () => {
  
  return (
    <MainLayout>
      <Hero />
      <CardSwiper />
    </MainLayout>
  );
};

export default HomePage;
