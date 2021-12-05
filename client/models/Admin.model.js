const mongoose = require('mongoose')
const Schema = mongoose.Schema
// 
const Admin = new Schema({
   
    name: {
        type: String,
        required: true,
    },

    password:{
        type: String,
        required: true,
    },
    
    imageURL: String,

   

    user_id: { type: Schema.Types.ObjectId, ref: 'User' },


   },
   
   { 

     timestamps: true,
})

module.exports = mongoose.model('Admin', Admin);