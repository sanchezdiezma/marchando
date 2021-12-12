const router = require("express").Router();
const Restaurant = require("../models/Restaurant.model");

router.get("/pendingRestaurants", (req, res) => {
  Restaurant.find({ status: "PENDING" })
    .then((allRestaurants) => res.json(allRestaurants))
    .catch((err) =>
      res.json({ err, errMessage: "Problema buscando Restaurantes" })
    );
});

router.get("/acceptedRestaurants", (req, res) => {
  Restaurant.find({ status: "ACCEPTED" })
    .then((allRestaurants) => res.json(allRestaurants))
    .catch((err) =>
      res.json({ err, errMessage: "Problema buscando Restaurantes" })
    );
});

router.get("/rejectedRestaurants", (req, res) => {
  Restaurant.find({ status: "REJECTED" })
    .then((allRestaurants) => res.json(allRestaurants))
    .catch((err) =>
      res.json({ err, errMessage: "Problema buscando Restaurantes" })
    );
});

router.put("/editRestaurant/:id", (req, res) => {
  console.log(req.body);

  const { id } = req.params;
  const { status } = req.body;

  Restaurant.findByIdAndUpdate(id, { status }, { new: true })
    .then((updatedRestaurant) => res.json(updatedRestaurant))
    .catch((err) =>
      res.json({ err, errMessage: "Problema editando Restaurante" })
    );
});

router.delete("/deleteRestaurant/:id", (req, res) => {
  const { id } = req.params;

  Restaurant.findByIdAndDelete(id)
    .then((deletedRestaurant) => res.json({ deletedRestaurant }))
    .catch((err) =>
      res.json({ err, errMessage: "Problema borrando Restaurante" })
    );
});

module.exports = router;
