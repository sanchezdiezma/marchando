import axios from "axios";

class ReservationService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5005/reservation",
      withCredentials: true,
    });
  }

  newReservation = (restaurantId, data) =>
    this.app.post(`/newReservation/${restaurantId}`, data);
}

export default ReservationService;
