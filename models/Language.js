const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({});

const Language = mongoose.model("Language", languageSchema);
module.exports = Language;
