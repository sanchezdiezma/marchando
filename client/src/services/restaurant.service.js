import axios from "axios";

class RestaurantService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/restaurantes`,
      withCredentials: true,
    });
  }

  getAllRestaurants = () => this.app.get("/allRestaurants");
  getOneRestaurant = (id) => this.app.get(`/${id}`);
  createRestaurant = (restaurantData) =>
    this.app.post("/newRestaurant", restaurantData);
  getUserRestaurants = () => this.app.get("/findUserRestaurants");
}

export default RestaurantService;
