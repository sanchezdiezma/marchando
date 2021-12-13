import React, { Component } from "react";
import RestaurantService from "../../../services/restaurant.service";
import ReservationCard from "../Reservations/ReservationCards";

class ReservationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      restaurants: [],
    };

    this.restaurantService = new RestaurantService();
  }

  componentDidMount() {
    this.restaurantService
      .getUserRestaurants()
      .then((res) => {
        this.setState({ restaurants: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.restaurants.map((restaurant) => (
          <>
            <ReservationCard
              key={restaurant.id}
              restaurant={restaurant}
              openModal={this.openModal}
            ></ReservationCard>
          </>
        ))}
      </div>
    );
  }
}

export default ReservationList;
