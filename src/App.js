import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar icon="fas fa-cloud-sun" title="  React Open Weather API" />
      <Search />
    </div>
  );
}

export default App;
