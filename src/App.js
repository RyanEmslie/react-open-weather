import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./App.css";

//! NEED TO BRING OVER ENV VARIABLE
const API_KEY = "715b053fa54036e6f3672af97d9be80d";

class App extends Component {
  state = {
    zipData: [],
    loading: false
  };

  searchZip = async zipCode => {
    console.log(process.env.REACT_OPEN_WEATHER_API_KEY);
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=32605,us&appid=${API_KEY}`
    );
    const json = await res.json();
    this.setState({ zipData: json });
    console.log(this.state.zipData);
  };

  render() {
    return (
      <div className="container">
        <Navbar icon="fas fa-cloud-sun" title="  React Open Weather API" />
        <Search searchZip={this.searchZip} />
      </div>
    );
  }
}

export default App;
