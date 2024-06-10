const mongoose = require("mongoose");

const dosa = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true },
  botTokens: [{ type: String }],
});

module.exports = mongoose.model("dosa", dosa);