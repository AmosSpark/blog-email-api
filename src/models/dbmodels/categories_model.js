const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// SCHEMA

const categoriesSchema = new mongoose.Schema(
  {
    _id: Number,
    name: String,
    description: String,
  },
  { _id: false }
);

// AUTO-INCREMENT PLUGIN

categoriesSchema.plugin(AutoIncrement, {
  id: "categories_counter",
  inc_field: "_id",
});

// MODEL

const Categorie = new mongoose.model("Categorie", categoriesSchema);

module.exports = Categorie;
