import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import City from "./components/CityItem";
import "./App.css";

class App extends Component {
  state = {
    zipData: [],
    loading: false,
    alert: false
  };

  searchZip = async zipCode => {
    this.setState({ alert: false });
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${
        process.env.REACT_APP_OPEN_WEATHER_API_KEY
      }`
    );
    const json = await res.json();
    if (json.cod !== 200) {
      this.setState({ alert: true });
    } else {
      this.setState({ zipData: json });
      this.setState({ loading: true });
    }
  };

  render() {
    return (
      <div className="container">
        <Navbar icon="fas fa-cloud-sun" title="  React Open Weather API" />
        <Search searchZip={this.searchZip} />
        {this.state.alert && <Alert />}
        {this.state.loading && <City zipData={this.state.zipData} />}
      </div>
    );
  }
}

export default App;
