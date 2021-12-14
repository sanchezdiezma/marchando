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
            initialCenter={{
              lat: 40.41716324692655,
              lng: -3.703504849618043
            }}
            zoom={12}

            
            
          >
            <Marker
              title={"Edelweis"}
              name={"SOMA"}
              position={{ lat: 40.417056915653724, lng: -3.6965467813120205 }}
            />
            
            <Marker
              title={"Macarena"}
              position={{ lat: 40.390801905530054, lng:-3.6913688386975587  }}
            />

            
            <Marker
              title={"Burnout"}
              position={{ lat: 40.421191866999344, lng: -3.702063084701775  }}
           
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






































