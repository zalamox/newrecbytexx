const { Schema, model } = require("mongoose");

const auto = new Schema (
  {
    id: {
      type: String,
      required: true,
    },
    token: {

      type: String,
      required: true,
    },

    rea : {
      type: String,
      required: true,
    },
  }
)
module.exports = model ('auto' , auto)