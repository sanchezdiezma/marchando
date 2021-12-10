import React, { Component } from "react";
import Maps from "../../Maps";

class Mapsview extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Estos son los restaurantes</h1>
          <Maps />
        </div>
      </div>
    );
  }
}

export default Mapsview;
