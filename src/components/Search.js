import React, { Component } from "react";

export class Search extends Component {
  state = {
    zipCode: ""
  };

  onChange = e => {
    this.setState({ zipCode: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onChange}
            placeholder="Please Enter US Zipcode..."
            value={this.state.zipCode}
          />
          <input
            type="submit"
            className="btn btn-success btn-block"
            value="Search"
          />
        </form>
      </div>
    );
  }
}

export default Search;
