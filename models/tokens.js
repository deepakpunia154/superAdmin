const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  panelName: { type: String, required: true, unique: true },
  token: { type: String, required: true },
}, {timestamps : true});

module.exports = mongoose.model("Token", tokenSchema);
