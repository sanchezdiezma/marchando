const router = require("express").Router();
const Restaurant = require("../models/Restaurant.model");

router.get("/allRestaurants", (req, res) => {
  Restaurant.find({ status: "ACCEPTED" })
    .then((allRestaurants) => res.json(allRestaurants))
    .catch((err) =>
      res.json({ err, errMessage: "Problema buscando Restaurantes" })
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

router.post("/newRestaurant", (req, res) => {
  const {
    name,
    direction,
    description,
    priceRange,
    capacity,
    imageURL,
    typeOfKitchen,
    specialInfo,
    status,
  } = req.body;

  Restaurant.create({
    name,
    direction,
    description,
    priceRange,
    capacity,
    imageURL,
    typeOfKitchen,
    specialInfo,
    status,
  })
    .then((newRestaurant) => res.json(newRestaurant))
    .catch((err) =>
      res.json({ err, errMessage: "Problema creando Restaurante" })
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

module.exports = router;
