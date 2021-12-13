const router = require("express").Router();
const Reservation = require("../models/Reservation.model");

router.post("/newReservation/:restaurantId", (req, res) => {
  const ownerId = req.session.currentUser._id;
  const { restaurantId } = req.params;
  const { persons, date } = req.body;

  Reservation.create({
    ownerId,
    restaurantId,
    persons: Number(persons),
    date: new Date(date),
  })
    .then((newReservation) => res.json(newReservation))
    .catch((err) => res.json({ err, errMessage: "Problema creando Reserva" }));
});

module.exports = router;
