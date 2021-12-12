import axios from "axios";

class AdminService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5005/admin",
      withCredentials: true,
    });
  }

  getPendingRestaurants = () => this.app.get("/pendingRestaurants");
  getAcceptedRestaurants = () => this.app.get("/acceptedRestaurants");
  getRejectedRestaurants = () => this.app.get("/rejectedRestaurants");
  getOneRestaurant = (id) => this.app.get(`/${id}`);
  createRestaurant = (restaurantData) =>
    this.app.post("/newRestaurant", restaurantData);
  changeRestaurantStatus = (id, status) =>
    this.app.put(`/editRestaurant/${id}`, status);
}

export default AdminService;
