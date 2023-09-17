import React from "react";
import logo from "./assets/Facebook.svg";
import Card from "./components/Сard";
import Footer from "./components/Footer";
import NavHero from "./components/NavHero";

function App() {
  return (
    <div className="bg-secondary w-full overflow-hidden">
      <div className="bg-black">
        <NavHero />
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default App;
