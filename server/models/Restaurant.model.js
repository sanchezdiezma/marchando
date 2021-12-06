const mongoose = require('mongoose')
const Schema = mongoose.Schema
// 
const Restaurant = new Schema({
   
    name: String,
    direction: String, 
    description: String,
    priceRange: String,
    capacity: Number, // Esto es así??

    imageURL: String,
    
    
    typeOfKitchen: {
        type: [String],
        enum: ["ALEMANA", "ANDALUZA", "AMERICANA", "ARGENTINA",
        "ARROCERÍA", "AUSTRALIANA", "ÁRABE", "BANGLADESH",
        "BBQ", "BOCADILLOS", "BRASILEÑA", "BRASERÍA",
        "COREANA", "ECUATORIANA", "EGIPCIA", "ESPAÑOLA",
        "ETÍOPE", "FRANCESA", "GALLEGA", "GRIEGA",
        "HAMBURGUESAS", "HAWAIANA", "INDIA", "ITALIANA",
        "JAMAICANA", "JAPONESA", "KURDA", "LIBANESA",
        "PERUANA", "PAQUISTANI", "PORTUGUESA", "RUSA",
        "TAILANDESA", "TURCA", "VENEZOLANA", "VIETNAMITA",]

    },

    specialInfo: {
        type: [String],
        enum: ["VEGETARIANO", "VEGANO", "ALERGIAS", "CELIACOS"]

    },
    location: [{
        type: {
             type: String,
        },
        coordinates: [Number]
    }],


   
})

Restaurant.index({ location: '2dsphere' }); 

module.exports = mongoose.model('Restaurant', Restaurant)



