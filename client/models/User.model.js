const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
    },


    password: {
      type: String,
      required: true,
    },

      name: {
      type: String,
      required: true,
    },

      lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique:true,
    },


    usertype: {
      type: String,
      required: true,
      default: 'USER',
      enum: ["USER", "ADMIN","RESTAURANT"]

    },



    imageURL: String,

  },
  {

    
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
