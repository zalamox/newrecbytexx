const { Schema, model } = require("mongoose");

const autoi1 = new Schema (
  {
    id: {
      type: String,
      required: true,
    },
    token: {

      type: String,
      required: true,
    },

    but : {
      type: String,
      required: true,
    },
  }
)
module.exports = model ('autoi1' , autoi1)