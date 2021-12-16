import axios from "axios";

class ReservationService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/reservation`,
      withCredentials: true,
    });
  }

  newReservation = (restaurantId, data) =>
    this.app.post(`/newReservation/${restaurantId}`, data);
  getReservations = (restaurantId) => this.app.get(`/find/${restaurantId}`);
  updateReservation = (reservationId) =>
    this.app.post(`/update/${reservationId}`);

  clientReservation = () => this.app.get("/showReservation");
  restaurantReservation = () => this.app.get("/showAcceptedReservations");
}

export default ReservationService;
