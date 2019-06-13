import React, { Component } from "react";
import Forecast from "./Forecast";

export class City extends Component {
  render(props) {
    const {
      temperature,
      startTime,
      shortForecast,
      detailedForecast,
      icon,
      windSpeed,
      windDirection
    } = this.props.forecastData.properties.periods[0];
    const {
      city,
      state
    } = this.props.locationData.properties.relativeLocation.properties;

    return (
      <>
        <div>
          <nav className="navbar bg-primary all-center">
            {city}, {state}
          </nav>
        </div>
        <div>
          <div
            id="current-weather"
            className="container card grid-2 sub-container"
          >
            <div className="card text-center">
              <p>{startTime}</p>
              <p>{temperature} F</p>
              <p>{shortForecast}</p>
              <img src={icon} alt="" style={{ width: "200px" }} />
              <p>{detailedForecast}</p>
            </div>
            <div className="card text-center">
              <table>
                <thead>
                  <tr>
                    <th>Weather Data</th>
                  </tr>
                </thead>
                <tbody colSpan="2">
                  <tr>
                    <td>Sunset:</td>
                  </tr>
                  <tr>
                    <td>Sunrise:</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="grid-7 container card sub-container">
          <Forecast forecastData={this.props.forecastData} />
        </div>
      </>
    );
  }
}

export default City;
