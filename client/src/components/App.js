import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AuthService from "../services/auth.service";
import Navbar from "./layaout/Navigation/Navbar";
import SignupPage from "./pages/SignUp/SignUpPage";
import LoginPage from "./pages/Login/LoginPage";
import RestaurantForm from "./pages/RestaurantCreate/RestaurantForm";
import RestaurantPage from "./pages/RestaurantList/RestaurantPage";
import AdminPage from "./pages/Admin/AdminPage";
import Home from "../components/pages/Index/Home";
import ApprovedRestaurants from "./pages/Admin/ApprovedRestaurants";
import RejectedRestaurants from "./pages/Admin/RejectedRestaurants";
import UserProfile from "./pages/User/UserProfile";
import ReservationList from "./pages/Reservations/ReservationList";
import ReservationPage from "./pages/RestaurantReservations/ReservationPage";
import Mapsview from "../components/pages/MapsPages/Mapsview";

class App extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      loggedUser: undefined,
    };
    this.authService = new AuthService();
  }

  componentDidMount() {
    this.authService
      .isloggedin()
      .then((response) => this.storeUser(response.data))
      .catch((err) => this.storeUser(null));
  }

  storeUser = (user) => {
    this.setState({ loggedUser: user });
  };

  render() {
    return (
      <div>
        <Navbar storeUser={this.storeUser} loggedUser={this.state.loggedUser} />
        <main>
          <Navbar
            storeUser={this.storeUser}
            loggedUser={this.state.loggedUser}
          />
          <Switch>
            <Route path="/" exact strict render={() => <Home></Home>}></Route>
            <Route
              path="/signup"
              render={(props) => (
                <SignupPage {...props} storeUser={this.storeUser} />
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <LoginPage {...props} storeUser={this.storeUser} />
              )}
            />
            <Route
              path="/perfil"
              render={(props) => (
                <UserProfile {...props} storeUser={this.storeUser} />
              )}
            />
            <Route
              path="/nuevo-restaurante"
              render={(props) => (
                <RestaurantForm {...props} storeUser={this.storeUser} />
              )}
            />
            <Route
              path="/restaurant/details/:id"
              render={(props) => (
                <RestaurantPage {...props} storeUser={this.storeUser} />
              )}
            />
            <Route
              path="/adminpage"
              render={(props) => (
                <AdminPage loggedUser={this.state.loggedUser} />
              )}
            />
            <Route
              path="/reservationsAccepted"
              render={(props) => (
                <ReservationPage {...props} storeUser={this.storeUser} />
              )}
            />
            <Route
              path="/acceptedRestaurants"
              render={(props) => (
                <ApprovedRestaurants loggedUser={this.state.loggedUser} />
              )}
            />
            <Route
              path="/rejectedRestaurants"
              render={(props) => (
                <RejectedRestaurants loggedUser={this.state.loggedUser} />
              )}
            />
            <Route
              path="/restaurantes"
              render={(props) => (
                <>
                  <Mapsview loggedUser={this.state.loggedUser} />
                  <ApprovedRestaurants loggedUser={this.state.loggedUser} />
                </>
              )}
            />
            <Route
              path="/userProfile"
              render={(props) => (
                <UserProfile {...props} storeUser={this.storeUser} />
              )}
            />
            <Route
              path="/restaurantProfile"
              render={(props) => (
                <ReservationList {...props} storeUser={this.storeUser} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
