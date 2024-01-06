const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    hospitalName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cfPassword: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: Number,
    },

    hosRegDate: {
      type: String,
    },
    hosResNum: {
      type: String,
    },
    emWdNum: {
      type: Number,
    },
    numAmb: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);

