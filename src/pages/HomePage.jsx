import MainLayout from "../components/MainLayout";
import Hero from "../components/Hero";
import CardSwiper from "../components/CardSwiper";

import { useEffect } from "react";
import { scroller } from "react-scroll";
import AboutYClientes from "../components/AboutYClientes";

const HomePage = () => {


  useEffect(() => {
    const sectionToScroll = localStorage.getItem("scrollToSection");
    if (sectionToScroll) {
      scroller.scrollTo(sectionToScroll, {
        duration: 800,
        delay: 100,
        offset: -70,
        smooth: "ease",
      });
      localStorage.removeItem("scrollToSection");
    }
  }, []);

  return (
    <MainLayout>
      <Hero />
      <CardSwiper />
      <AboutYClientes />
    </MainLayout>
  );
};

export default HomePage;
