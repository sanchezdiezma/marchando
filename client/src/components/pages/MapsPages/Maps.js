// import React, { Component } from "react";
// import ApprovedRestaurants from "../components/pages/Admin/ApprovedRestaurants";
// import "./Maps.css";


// export class MapContainer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loggedUser: this.props.loggedUser,
//     };
//   }

//   render() {
//     return (
//       <>
        
//       </>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyB2S44K34qk8CkQtWSYkFycgcJHegFLzrk",
// })(MapContainer);

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ApprovedRestaurants from "../../pages/Admin/ApprovedRestaurants"
import icon from '../../../assets/favi.png'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.3930698474492,
      lng: -3.6984858541826364
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '170vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB2S44K34qk8CkQtWSYkFycgcJHegFLzrk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.3929132066392}
            lng={-3.6983826202555394}
            text="Ironhack"
          />
        
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;




































