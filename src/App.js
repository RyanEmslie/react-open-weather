import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import City from "./components/CityItem";
import "./App.css";

class App extends Component {
  state = {
    locationData: [],
    forecastData: [],
    hourlyData: [],
    loaded: false,
    alert: false
  };
  //!
  //! ADD ${zipCode}
  //!
  getLocation = async zipCode => {
    this.setState({ alert: false });
    const res = await fetch(`https://api.weather.gov/points/29.6521,-82.3397`);
    const json = await res.json();
    this.setState({ locationData: json });
    await this.getForecast();
    await this.getHourly();
  };

  getForecast = async () => {
    this.setState({ alert: false });
    const res = await fetch(
      `https://api.weather.gov/gridpoints/JAX/42,31/forecast`
    );
    const json = await res.json();
    this.setState({ forecastData: json });
  };

  getHourly = async () => {
    this.setState({ alert: false });
    const res = await fetch(
      `https://api.weather.gov/gridpoints/JAX/42,31/forecast/hourly`
    );
    const json = await res.json();
    this.setState({ hourlyData: json });
    this.setState({ loaded: true });
  };

  render() {
    return (
      <div className="container">
        <Navbar icon="fas fa-cloud-sun" title="  React Open Weather API" />
        <Search getLocation={this.getLocation} />
        {this.state.alert && <Alert />}
        {this.state.loaded && (
          <City
            locationData={this.state.locationData}
            forecastData={this.state.forecastData}
            hourlyData={this.state.hourlyData}
          />
        )}
      </div>
    );
  }
}

export default App;
