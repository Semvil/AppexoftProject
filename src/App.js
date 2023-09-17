import React from "react";
import logo from "./assets/Facebook.svg";
import Card from "./components/Сard";
import Footer from "./components/Footer";
import NavHero from "./components/NavHero";
import DashboardSection from "./components/DashboardSection";
import SubscribeSection from "./components/SubscribeSection";

function App() {
  return (
    <>
      <NavHero />
      <DashboardSection />
      <SubscribeSection />
      <Card />
      <Footer />
    </>
  );
}

export default App;
