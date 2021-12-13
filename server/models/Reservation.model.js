const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reservation = new Schema({
  restaurantId: { type: mongoose.SchemaTypes.ObjectId, ref: "Restaurant" },
  ownerId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  persons: { type: Number },
  date: { type: Date, default: Date.now },
});

Reservation.index({ location: "2dsphere" });

module.exports = mongoose.model("Reservation", Reservation);
