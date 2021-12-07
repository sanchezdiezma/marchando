import { Component } from 'react'
import AuthService from '../services/auth.service';
import './App.css';
import Navbar from './layaout/Navigation/Navbar'

class App extends Component{
  constructor(pros){
    super(pros)

    this.state = {loggedUser:undefined}
    this.authService = new AuthService()
  }

  render() {
    return (
      <>
      <Navbar>

      </Navbar>
      </>
    )
  }
}


export default App;

// {/* // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //       HOLALALALA
// //       </header>
// //     </div>
// //   );
// // } */}