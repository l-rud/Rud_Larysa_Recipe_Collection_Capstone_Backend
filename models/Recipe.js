const { Schema, model } = require('../config/db-connection');

// Defining recipeSchema using Mongoose's Schema constructor. 
// It specifies fields for a recipe document (title, category, ingredients, directions, links) 
// each with specific types (String or Array of String) and validation rules (required, unique).
const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    category: {
        type: String,
        required: true,
        unique: false,
      },
    ingredients: [{
        type: String
    }],
    directions: {
      type: String,
      required: true,
      unique: false,
    },
    links: [{
        type: String
    }]
  }
);

module.exports = model('Recipe', recipeSchema);