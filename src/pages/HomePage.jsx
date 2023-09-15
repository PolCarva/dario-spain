import React from "react";
import MainLayout from "../components/MainLayout";
import Hero from "../components/Hero";
import CardScroller from "../components/CardScroller";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <CardScroller />
    </MainLayout>
  );
};

export default HomePage;
