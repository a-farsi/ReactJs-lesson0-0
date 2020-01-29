import React, { Component } from "react";

class Country extends Component {
  render() {
    return (
      <div>
        <p>Do you want to visit {this.props.country}</p>
      </div>
    );
  }
}

export default Country;
