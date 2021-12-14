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
  getReservations = (restaurantId) => this.app.get(`/find/${restaurantId}`);
  updateReservation = (reservationId) =>
    this.app.post(`/update/${reservationId}`);

  clientReservation = () => this.app.get();
}

export default ReservationService;