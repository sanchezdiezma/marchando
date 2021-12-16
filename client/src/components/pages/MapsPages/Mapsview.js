// import React, { Component } from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
// import ApprovedRestaurants from "../Admin/ApprovedRestaurants";
// import AdminService from "../../../services/admin.service";

// const mapStyles = {
//   width: "1200px",
//   height: "400px",
// };

// export class MapContainer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cords: [
//         { lat: 40.409381165185266, lng: -3.701374702787388 },
//         { lat: 40.42752135148137, lng: -3.7147215036180077 },
//         { lat: 40.409315810906634, lng: -3.701138668413024 },
//         { lat: 40.42908218352926, lng: -3.7194141414236954 },
//         { lat: 40.44837424533721, lng: -3.6734840549176115 },
//         { lat: 40.42737493131458, lng: -3.7073120464916243 },
//         { lat: 40.432895001578856, lng: -3.7023338684475617 },
//         { lat: 40.421684118956456, lng: -3.7062396572419263 },
//         { lat: 40.41975583320167, lng: -3.7045230450979845 },
//         { lat: 40.43657400399427, lng: -3.6961859469175584 },
//       ],
//     };
//     this.adminService = new AdminService();
//   }

//   showMarkers = () => {
//     return this.state.cords.map((store, index) => {
//       return (
//         <Marker
//           key={index}
//           id={index}
//           position={{
//             lat: store.lat,
//             lng: store.lng,
//           }}
//           onClick={() => console.log("Clicked")}
//         />
//       );
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Map
//           google={this.props.google}
//           zoom={13}
//           style={mapStyles}
//           initialCenter={{
//             lat: 40.41717551913266,
//             lng: -3.7029255027932986,
//           }}
//         >
//           {this.showMarkers()}
//         </Map>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyB2S44K34qk8CkQtWSYkFycgcJHegFLzrk",
// })(MapContainer);
