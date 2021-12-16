const router = require("express").Router();
const Restaurant = require("../models/Restaurant.model");

router.get("/allRestaurants", (req, res) => {
  Restaurant.find({ status: "ACCEPTED" })
    .then((allRestaurants) => res.json(allRestaurants))
    .catch((err) =>
      res.json({ err, errMessage: "Problema buscando Restaurantes" })
    );
});

router.post("/newRestaurant", (req, res) => {
  const {
    name,
    description,
    priceRange,
    capacity,
    imageURL,
    typeOfKitchen,
    specialInfo,
    location
  } = req.body;

  console.log(req.body)

  Restaurant.create({
    name,
    description,
    priceRange,
    capacity,
    imageURL,
    typeOfKitchen,
    specialInfo,
    location
  })
    .then((newRestaurant) => res.status(200).json(newRestaurant))
    .catch((err) => {
      console.log(err)
      res.status(400).json({ err, errMessage: "Problema creando Restaurante" })}
    );
});

router.put("/editRestaurant/:id", (req, res) => {
  const { id } = req.params;
  const {
    name,
    direction,
    description,
    priceRange,
    capacity,
    imageURL,
    typeOfKitchen,
    specialInfo,
    location,
    status,
  } = req.body;

  Restaurant.findByIdAndUpdate(
    id,
    {
      name,
      direction,
      description,
      priceRange,
      capacity,
      imageURL,
      typeOfKitchen,
      specialInfo,
      location,
      status,
    },
    { new: true }
  )
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

router.get("/findUserRestaurants", (req, res) => {
  console.log("el usuario logeado es:", req.session.currentUser._id);

  Restaurant.find({ ownerId: req.session.currentUser._id })
    .then((response) => res.json(response))
    .catch((err) =>
      res.json({ err, errMessage: "Problema obteniendo tu Restaurante" })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Restaurant.findById(id)
    .then((theRestaurant) => res.json(theRestaurant))
    .catch((err) =>
      res.json({ err, errMessage: "Problema buscando un Restaurante" })
    );
});

module.exports = router;
