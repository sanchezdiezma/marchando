import axios from 'axios'

class RestaurantService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/restaurantes',
      withCredentials: true
    })
  }

  getAllRestaurants = () => this.app.get("/allRestaurants")
  getOneRestaurant = (id) => this.app.get(`/${id}`)
  createRestaurant = (restaurantData) => this.app.post("/newRestaurant", restaurantData)
}

export default RestaurantService