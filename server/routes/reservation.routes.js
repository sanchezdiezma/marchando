const router = require("express").Router();
const Reservation = require("../models/Reservation.model");

router.post("/newReservation/:restaurantId", (req, res) => {
  const ownerId = req.session.currentUser._id;
  const { restaurantId } = req.params;
  const { persons, date } = req.body;
  const dateArr = date.split(":");

  const formattedDate = new Date(2020, 11, 17, dateArr[0], dateArr[1], 0);

  Reservation.create({
    ownerId,
    restaurantId,
    persons: Number(persons),
    date: formattedDate,
  })
    .then((newReservation) => res.status(200).json(newReservation))
    .catch((err) =>
      res.status(400).json({ err, errMessage: "Problema creando Reserva" })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Reservation.findById(id)
    .then((theReservation) => res.json(theReservation))
    .catch((err) =>
      res.json({ err, errMessage: "Problema buscando una Reserva" })
    );
});

module.exports = router;
