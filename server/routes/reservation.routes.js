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

//Buscar si un restaurante tiene reservas
//Reservation.find({ownerId: restaurantId})

router.get("/find/:restaurantId", (req, res) => {
  const { restaurantId } = req.params;

  Reservation.find({ restaurantId: restaurantId })
    .then((reservation) => res.json(reservation))
    .catch((err) =>
      res.json({ err, errMessage: " Problema buscando esta reserva" })
    );
});

//Buscar una reserva en concreto

router.post("/update/:id", (req, res) => {
  const { id } = req.params;

  Reservation.findByIdAndUpdate(
    id,
    {
      status: "TAKEN",
      client: req.session.currentUser._id,
    },
    { new: true }
  )
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
});

//ruta tipo get que con req.session.currentUser._id llame a Reservation.find({client: req.session.currentUser._id})

router.get("/showReservation", (req, res) => {
  // const clientId = req.session.currentUser._id;

  Reservation.find({ client: req.session.currentUser._id })
    .populate("restaurantId")
    .then((reservationClient) => res.status(200).json(reservationClient))
    .catch((err) => res.status(500).json(err));
});

router.get("/showAcceptedReservations", (req, res) => {
  // const clientId = req.session.currentUser._id;

  Reservation.find({ ownerId: req.session.currentUser._id })
    .populate("restaurantId")
    .populate("client")
    .then((reservationRestaurant) =>
      res.status(200).json(reservationRestaurant)
    )
    .catch((err) => res.status(500).json(err));
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
