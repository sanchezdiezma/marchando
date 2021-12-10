import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.39188333,
      lng: -3.6985,
    },
    zoom: 12,
  };

  render() {
    return (
      <div style={{ height: "400px", width: "400px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB2S44K34qk8CkQtWSYkFycgcJHegFLzrk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.39188333}
            lng={-3.6985}
            icon="http://maps.google.com/mapfiles/kml/paddle/blu-stars.png"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
