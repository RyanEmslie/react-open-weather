import React, { Component } from "react";

export class City extends Component {
  render(props) {
    console.log(this.props.zipData);
    const { name } = this.props.zipData;
    let { temp } = this.props.zipData.main;
    temp = parseFloat(temp);
    return (
      <div>
        <div className="container card">
          <nav className="navbar bg-primary">Location Information</nav>
          <p>City: {name}</p>
          <p>Temp: {(((temp - 273.15) * 9) / 5 + 32).toFixed(1)}</p>
        </div>
        <div className="container card">
          <nav className="navbar bg-primary">Location Information</nav>
          <p>City: {name}</p>
          <p>Temp: {(((temp - 273.15) * 9) / 5 + 32).toFixed(1)}</p>
        </div>
        <div className="grid-2">
          <div className="container card">
            <nav className="navbar bg-primary">Grid 1 Information</nav>
            <p>City: {name}</p>
            <p>Temp: {(((temp - 273.15) * 9) / 5 + 32).toFixed(1)}</p>
          </div>
          <p className="container card">
            <nav className="navbar bg-primary">Grid 2 Information</nav>
            <p>City: {name}</p>
            <p>Temp: {(((temp - 273.15) * 9) / 5 + 32).toFixed(1)}</p>
          </p>
        </div>
        <div className="grid-5">
          <nav className="navbar bg-primary">1</nav>
          <nav className="navbar bg-primary">2</nav>
          <nav className="navbar bg-primary">3</nav>
          <nav className="navbar bg-primary">4</nav>
          <nav className="navbar bg-primary">5</nav>
        </div>
        <div className="container card">
          <nav className="navbar bg-primary">Location Information</nav>
          <p>City: {name}</p>
          <p>Temp: {(((temp - 273.15) * 9) / 5 + 32).toFixed(1)}</p>
        </div>
      </div>
    );
  }
}

export default City;
