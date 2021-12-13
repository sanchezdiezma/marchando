import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import ApprovedRestaurants from "../components/pages/Admin/ApprovedRestaurants";
import "./Maps.css";

export class MapContainer extends Component {
  render() {
    return (
      <>
        <div id="mapBox">
          <Map
            google={this.props.google}
            style={{ width: "100%", height: "100%", position: "relative" }}
            className={"map"}
            zoom={14}
          >
            <Marker
              title={"The marker`s title will appear as a tooltip."}
              name={"SOMA"}
              position={{ lat: 37.778519, lng: -122.40564 }}
            />
            <Marker
              name={"Dolores park"}
              position={{ lat: 37.759703, lng: -122.428093 }}
            />
            <Marker />
            <Marker
              name={"Your position"}
              position={{ lat: 37.762391, lng: -122.439192 }}
              icon={{
                url: "/path/to/custom_icon.png",
              }}
            />
          </Map>
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
