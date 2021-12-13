import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import ApprovedRestaurants from "../components/pages/Admin/ApprovedRestaurants";
import "./Maps.css";
const mapStyles = {
  width: "40%",
  height: "40%",
};

export class MapContainer extends Component {
  render() {
    return (
      <>
        <div id="mapBox">
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 40.39188333,
              lng: -3.6985,
            }}
          />
        </div>
        <div>
          <ApprovedRestaurants />
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB2S44K34qk8CkQtWSYkFycgcJHegFLzrk",
})(MapContainer);
