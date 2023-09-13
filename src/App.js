import React from "react";
import logo from "./assets/Facebook.svg";
import DashboardSection from "./components/DashboardSection";
import SubscribeSection from "./components/SubscribeSection";

function App() {
  return (
    <>
      <div className="bg-primary">
        App
        <img src={logo} alt="logo" />
      </div>
      <DashboardSection />
      <SubscribeSection />
    </>
  );
}

export default App;
