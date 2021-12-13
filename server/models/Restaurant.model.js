const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Restaurant = new Schema({
  name: String,
  direction: String,
  description: String,
  priceRange: String,
  capacity: {
    type: Number,
    min: 1,
    max: 200,
  },

  imageURL: String,

  typeOfKitchen: {
    type: [String],
    enum: [
      "ALEMANA",
      "ANDALUZA",
      "AMERICANA",
      "ARGENTINA",
      "ARROCERÍA",
      "AUSTRALIANA",
      "ÁRABE",
      "BANGLADESH",
      "BBQ",
      "BOCADILLOS",
      "BRASILEÑA",
      "BRASERÍA",
      "COREANA",
      "ECUATORIANA",
      "EGIPCIA",
      "ESPAÑOLA",
      "ETÍOPE",
      "FRANCESA",
      "GALLEGA",
      "GRIEGA",
      "HAMBURGUESAS",
      "HAWAIANA",
      "INDIA",
      "ITALIANA",
      "JAMAICANA",
      "JAPONESA",
      "KURDA",
      "LIBANESA",
      "PERUANA",
      "PAQUISTANI",
      "PORTUGUESA",
      "RUSA",
      "TAILANDESA",
      "TURCA",
      "VENEZOLANA",
      "VIETNAMITA",
    ],
  },

  specialInfo: {
    type: [String],
    enum: ["VEGETARIANO", "VEGANO", "ALERGIAS", "CELIACOS"],
  },
  location: [
    {
      type: {
        type: String,
      },
      coordinates: [Number],
    },
  ],
  status: {
    type: String,
    enum: ["PENDING", "ACCEPTED", "REJECTED"],
    default: "PENDING",
  },
});

Restaurant.index({ location: "2dsphere" });

module.exports = mongoose.model("Restaurant", Restaurant);
