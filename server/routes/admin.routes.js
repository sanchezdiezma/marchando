const router = require("express").Router()
const Restaurant = require("../models/Restaurant.model")



router.get("/pendingRestaurants", (req,res) => {
  Restaurant.find({status: 'PENDING'})
    .then(allRestaurants => res.json(allRestaurants))
    .catch(err => res.json({ err, errMessage: "Problema buscando Restaurantes" }))

})

router.put("/editRestaurant/:id", (req, res) => {
  const { id } = req.params
  const { name, direction, description, priceRange, capacity, imageURL, typeOfKitchen, specialInfo, location, status } = req.body

  Restaurant.findByIdAndUpdate(id, { name, direction, description, priceRange, capacity, imageURL, typeOfKitchen, specialInfo, location, status }, { new: true })
    .then(updatedRestaurant => res.json(updatedRestaurant))
    .catch(err => res.json({ err, errMessage: "Problema editando Restaurante" }))
})


router.delete("/deleteRestaurant/:id", (req, res) => {
  const { id } = req.params

  Restaurant.findByIdAndDelete(id)
    .then(deletedRestaurant => res.json({ deletedRestaurant }))
    .catch(err => res.json({ err, errMessage: "Problema borrando Restaurante" }))
})

module.exports = router