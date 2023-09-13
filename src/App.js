import React from "react";
import logo from "./assets/Facebook.svg";
import DashboardSection from "./components/DashboardSection";
function App() {
  return (
    <>
      <div className="bg-primary">
        App
        <img src={logo} alt="logo" />
      </div>
      <DashboardSection />
    </>
  );
}

export default App;
