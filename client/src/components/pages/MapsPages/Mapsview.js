<<<<<<< HEAD
import React, { Component } from "react";
// import { InputGroup, FormControl } from "react-bootstrap";
import Maps from "./Maps";
=======
// import React, { Component } from "react";
// // import { InputGroup, FormControl } from "react-bootstrap";
// import Maps from "../../Maps";
>>>>>>> 047bf7a8365ce83a891f80e799f74a7f70a5532d

class Mapsview extends Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.state = {
      loggedUser: this.props.loggedUser,
    };
  }
  render() {
    return (
      <div>
        {/* <InputGroup className="mb-12">
          <InputGroup.Text id="inputGroup-sizing-default">
            Busca un restaurante
          </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
       </InputGroup>
        <div className="container"> */}
        <h1>Estos son los restaurantes</h1>
        <Maps loggedUser={this.props.loggedUser} />
      </div>
      // </div>
    );
  }
}
=======
//     this.state = {
//       loggedUser: this.props.loggedUser,
//     };
//   }
//   render() {
//     return (
//       <div>
//         {/* <InputGroup className="mb-12">
//           <InputGroup.Text id="inputGroup-sizing-default">
//             Busca un restaurante
//           </InputGroup.Text> 
//         <FormControl
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//         />
//        </InputGroup>
//         <div className="container"> */}
//         <h1>Estos son los restaurantes</h1>
//         <Maps loggedUser={this.props.loggedUser} />
//       </div>
//       // </div>
//     );
//   }
// }
>>>>>>> 047bf7a8365ce83a891f80e799f74a7f70a5532d

export default Mapsview;
