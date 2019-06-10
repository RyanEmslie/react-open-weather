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
    this.props.searchZip(this.state.zipCode);
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onChange}
            placeholder="Please Enter US a 5-digit ZIP code..."
            value={this.state.zipCode}
          />
          <input
            type="submit"
            className="btn bg-secondary btn-block"
            value="Search"
          />
        </form>
      </div>
    );
  }
}

export default Search;
