const mongoose = require("mongoose");

const superAdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
    sparse: true,
  },
  role: {
    type: String,
    default: "SUPER_ADMIN",
  },

},{timestamps : true});

module.exports = mongoose.model("SuperAdmin", superAdminSchema);
