import React from "react";
import logo from "./assets/Facebook.svg";
import Card from "./components/Сard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-secondary w-full overflow-hidden">
      App
      <img src={logo} alt="logo" />
      Nav Hero ComputerSection EmailSection Card Footer
      <div className="bg-black">
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default App;
