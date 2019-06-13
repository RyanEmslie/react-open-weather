import React, { Component } from "react";

export class Forecast extends Component {
  render() {
    let sevenDay = [];
    for (
      let i = 2;
      i < this.props.forecastData.properties.periods.length;
      i += 2
    ) {
      sevenDay.push(this.props.forecastData.properties.periods[i]);
    }
    return (
      <>
        {sevenDay.map(day => {
          return (
            <div key={day.number} className="card">
              <p>{day.name}</p>
              <p>{day.temperature}</p>
              <img src={day.icon} style={{ width: "100px" }} alt="" />
              <p>{day.shortForecast}</p>
              <p>{day.name}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Forecast;
